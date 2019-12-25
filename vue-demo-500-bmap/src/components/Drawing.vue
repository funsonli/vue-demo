<template>
  <div>
    <baidu-map
      class="map"
      @ready="handler"
      :center="{lng: 116.404, lat: 39.915}"
      :zoom="14"
      :mapType="label1"
      @mousemove="syncPolyline"
      @click="paintPolyline"
      @rightclick="newPolyline"
    >
      <bm-control>
        <button @click="mapType">{{ satellite ? '路网图' : '卫星图' }}</button>
        <button @click="toggle('polyline')">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</button>
      </bm-control>
      <bm-polyline :path="path" v-for="path of polyline.paths"></bm-polyline>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      satellite: true,
      label1: 'BMAP_SATELLITE_MAP',
      polyline: {
        editing: false,
        paths: []
      }
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.zoom = 13;
      map.enableScrollWheelZoom(true);
    },
    mapType({ BMap, map }) {
      if (!this.satellite) {
        this.satellite = !this.satellite
        this.label1 = 'BMAP_SATELLITE_MAP'
      } else {
        this.satellite = !this.satellite
        this.label1 = 'BMAP_NORMAL_MAP'
      }
    },
    toggle(name) {
      this[name].editing = !this[name].editing;
      console.log(this.polyline.paths)
      console.log(this.polyline.paths[0])
      console.log(this.polyline.paths[0][0].lng)
      console.log(this.polyline.paths[0][0].lat)
    },
    syncPolyline(e) {
      if (!this.polyline.editing) {
        return;
      }
      const { paths } = this.polyline;
      if (!paths.length) {
        return;
      }
      const path = paths[paths.length - 1];
      if (!path.length) {
        return;
      }
      if (path.length === 1) {
        path.push(e.point);
      }
      this.$set(path, path.length - 1, e.point);
    },
    newPolyline(e) {
      if (!this.polyline.editing) {
        return;
      }
      const { paths } = this.polyline;
      if (!paths.length) {
        paths.push([]);
      }
      const path = paths[paths.length - 1];
      path.pop();
      if (path.length) {
        paths.push([]);
      }
    },
    paintPolyline(e) {
      if (!this.polyline.editing) {
        return;
      }
      const { paths } = this.polyline;
      !paths.length && paths.push([]);
      paths[paths.length - 1].push(e.point);
    }
  }
};
</script>
<style>
.map {width: 100%; height: 600px;}
</style>
