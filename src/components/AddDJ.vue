<template>
  <div>
    <label class="button" style="width: 100%">
      <input
        v-show="false"
        type="file"
        accept="image/*"
        ref="picUploader"
        @change="croppie"
      />
      <i class="fa fa-upload pr-1"></i>Bild ändern
    </label>
    <!-- Croppie Modal !-->
    <div :class="{ 'is-active': showCroppie }" class="modal">
      <div @click="showCroppie = false" class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="container">
            <button
              @click="showCroppie = false"
              class="delete"
              aria-label="close"
              style="float: right"
            ></button>
            <h1 class="title is-4">Schneide dein Herobild zu!</h1>

            <vue-croppie
              ref="croppieRef"
              :enableResize="false"
              :enableOrientation="true"
              :boundary="setCroppieOptions('boundary')"
              :viewport="setCroppieOptions('viewport')"
            >
            </vue-croppie>
            <div class="buttons">
              <button class="button" @click="crop">
                <i class="fa fa-cut"></i> Zuschneiden
              </button>
              <button
                v-show="cropped != null"
                class="button"
                :class="{ 'is-loading': currentlyLoading }"
                @click="submitPicture"
              >
                🏞 Herobild hochladen!
              </button>
            </div>

            <div class="py-3" v-show="cropped != null">
              <h1 class="title is-5">Vorschau</h1>
              <div>
                <img
                  :src="cropped"
                  style="
                    border-radius: 100px;
                    max-width: 120px;
                    max-height: 120px;
                  "
                />
              </div>
            </div>
            <!-- the result -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddDJ",

  data() {
    return {
      uploadPic: "",
      emailPermission: null,
      email: null,
      profilePic: null,
      settingsReceived: false,
      currentlyLoading: null,
      serverMsg: null,
      isError: false,
      editMail: false,
      showPrivacy: false,
      showConsent: false,
      showImprint: false,
      croppieImage: "",
      cropped: null,
      showCroppie: false,
    };
  },
  methods: {
    croppie(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var reader = new FileReader();
      reader.onload = (e) => {
        this.$refs.croppieRef.bind({
          url: e.target.result,
        });
      };

      reader.readAsDataURL(files[0]);
      //prepare Croppie Instance
      this.showCroppie = true;
    },
    setCroppieOptions(area) {
      if (area == "boundary")
        if (window.innerWidth < 680) {
          return { width: 230, height: 230 };
        } else {
          return { width: 450, height: 450 };
        }
      else if (area == "viewport") {
        if (window.innerWidth < 680) {
          return { width: 200, height: 200, type: "square" };
        } else {
          return { width: 400, height: 400, type: "square" };
        }
      }
    },
    crop() {
      // Options can be updated.
      // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
      let options = {
        type: "base64",
        size: { width: 200, height: 200 },
        format: "jpeg",
      };
      this.$refs.croppieRef.result(options, (output) => {
        this.cropped = this.croppieImage = output;
      });
    },
    submitPicture() {
      console.log("YES");
    },
  },
};
</script>
