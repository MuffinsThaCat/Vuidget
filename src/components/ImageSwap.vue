<template>
<div style="width:100%">
    <div v-for="image of showImages">
      <a href="https://certapro.com/" target="_blank" rel="noopener">
      <img id="logo-certapro" :src="" alt="CertaPro logo" align="center" class="float-center" />
      </a>
    </div>
  <div v-if="device === 'Desktop'" class="desktop-image" v-for="image of showImages" :style="{'background': `center / contain no-repeat url(${image})` }"></div>
<div v-if="device === 'Tablet'" class="tablet-image" v-for="image of showImages" :style="{'background': `center / contain no-repeat url(${image})` }"></div>
<div v-if="device === 'Mobile Phone'" class="mobile-phone-image" v-for="image of showImages" :style="{'background': `center / contain no-repeat url(${image})` }"></div>
</div>
</template>
<script>
    export default {
    data(){ return {
        device: "",
        numberOfImagesToShow: 0,
        iteration: 0,
        images:[
            {
                link: "",
                Desktop: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80",
                Tablet: "https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1981&q=80",
                "Mobile Phone": "https://images.unsplash.com/photo-1493031534415-e40b830b1099?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            }, {
                link: "",
                Desktop: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                Tablet: "https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                "Mobile Phone": "https://images.unsplash.com/photo-1504575797-2f83688754b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            }, {
                link: "",                
                Desktop: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                Tablet: "https://images.unsplash.com/photo-1471289549423-04adaecfa1f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2153&q=80",
                "Mobile Phone": "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
            }, {
                link: "",
                Desktop: "https://images.unsplash.com/photo-1532245128003-3db26c775465?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                Tablet: "https://images.unsplash.com/photo-1489686995744-f47e995ffe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
                "Mobile Phone": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            }
        ],
        showImages: [],
        width: 0
    }},
    methods: {
        determineMediaType(width){
            if(width > 1023){
                return { name: "Desktop", images: 3 };
            } else if(width > 767){
                return { name: "Tablet", images: 2 };
            } else {
                return { name: "Mobile Phone", images: 1 };
            }
        },
        getImages(numberOfImages, device){

            const results = [];
            let selector;

            for(let i = 0; i < numberOfImages; i++){
                selector = i + this.iteration;

                if(selector > this.images.length - 1){
                    this.iteration = 0;
                    selector = 0;
                }

                results.push(this.images[selector][device]);
            }

            this.iteration = selector + 1;
            localStorage.setItem("iteration", this.iteration);

            return results;

        },
        run(){
            const width = document.body.offsetWidth;

            const type = this.determineMediaType(width);

            this.device = type.name;

            const newNumberOfImagesToShow = type.images;

            if(newNumberOfImagesToShow !== this.numberOfImagesToShow){
                this.numberOfImagesToShow = newNumberOfImagesToShow;
                this.showImages = this.getImages(this.numberOfImagesToShow, type.name)
            }
        }
    },
    mounted(){

        this.run();
        window.addEventListener("resize", this.run)
    }
}
</script>