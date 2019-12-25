<template>
  <baidu-map
    :center="center"
    :zoom="zoom"
    @ready="handler"
    class="bm-view"
    mapType="BMAP_SATELLITE_MAP"
  >
    <bm-polygon
      :path="polygonPath"
      stroke-color="blue"
      :stroke-opacity="0.5"
      :stroke-weight="2"
      :editing="true"
      @lineupdate="updatePolygonPath"
    />
  </baidu-map>
</template>
<script>
export default {
  data() {
    return {
      center: { lng: 117.09433584668948, lat: 31.960592699589098 },
      zoom: 15,
      polygonPath: [
        { lng: 117.09413584668948, lat: 31.959572699589098 },
        { lng: 117.09494584668948, lat: 31.959592699589098 },
        { lng: 117.09483584668948, lat: 31.961592699589098 },
        { lng: 117.09383584668948, lat: 31.961592699589098 },
      ]
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.zoom = 17;
      map.enableScrollWheelZoom(true);
    }
  }
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
