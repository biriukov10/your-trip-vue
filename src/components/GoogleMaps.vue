<template>
  <div class="google-map" id="name"></div>
</template>

<script>
export default {
  name: "google-map",
  props: ["name"],
  data() {
    return {
      map: "",
      markers: [
        {
          position: {
            latitude: 50.005449,
            longitude: 36.236637,
            title: "Your Trip"
          }
        }
      ]
    };
  },
  computed: {
    mapMarkers() {
      return this.markers;
    }
  },
  mounted() {
    const element = document.getElementById("name");
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(50.005449, 36.236637),
      disableDefaultUI: true,
      // gray style
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        }
      ]
    };
    this.map = new google.maps.Map(element, options);

    this.markers.forEach(marker => {
      const position = new google.maps.LatLng(
        marker.position.latitude,
        marker.position.longitude,
        (marker.title = "Your Trip")
      );
      marker.map = this.map;
      marker.position = position;
      new google.maps.Marker(marker);
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.google-map {
  width: 100%;
  height: 350px;
  margin: 0 auto;
  background: gray;
}
</style>