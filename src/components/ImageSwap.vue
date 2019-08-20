<template>
    <div id="langoneContainer" style="width:100%">
        <div v-for="imageObj in showImages">
            <a :href="imageObj.link" target="_blank" rel="noopener">
                <img :id="imageObj.id" :src="imageObj.image" alt="CertaPro logo" align="center" class="float-center" />
            </a>
        </div>
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
                    id: "logo-pods",
                    link: "https://pods.com/",
                    Desktop: "https://ptopads.com/vuidget/img/P02507-320x90-PillarToPost.jpg",
                    Tablet: "https://ptopads.com/vuidget/img/P02507-320x90-PillarToPost.jpg",
                    "Mobile Phone": "https://ptopads.com/vuidget/img/P02507-320x50-PillarToPost.jpg"
                }, {
                    id: "logo-certapro",
                    link: "https://certapro.com/",
                    Desktop: "https://ptopads.com/wp-content/themes/oi-mastertheme-lean/assets/images/svg/certapro_logo.svg",
                    Tablet: "https://ptopads.com/wp-content/themes/oi-mastertheme-lean/assets/images/svg/certapro_logo.svg",
                    "Mobile Phone": "https://ptopads.com/wp-content/themes/oi-mastertheme-lean/assets/images/svg/certapro_logo.svg"
                }, {
                    id: "logo-fci",
                    link: "https://floorcoveringsinternational.com/",
                    Desktop: "https://ptopads.com/wp-content/uploads/2019/05/fci-logo.png",
                    Tablet: "https://ptopads.com/wp-content/uploads/2019/05/fci-logo.png",
                    "Mobile Phone": "https://ptopads.com/wp-content/uploads/2019/05/fci-logo.png"
                }

                // Removed because Russ only wants 3 ads in the rotation.
                // This will make the "ads" on large devices, appear to not rotate.

                // , {
                //     id: "logo-adt",
                //     link: "https://www.adt.com/",
                //     Desktop: "https://ptopads.com/wp-content/themes/oi-mastertheme-lean/assets/images/svg/adt-new-logo.svg",
                //     Tablet: "https://ptopads.com/wp-content/themes/oi-mastertheme-lean/assets/images/svg/adt-new-logo.svg",
                //     "Mobile Phone": "https://ptopads.com/wp-content/themes/oi-mastertheme-lean/assets/images/svg/adt-new-logo.svg"
                // }
            ],
            showImages: [],
            width: 0
        }},
        methods: {
            determineMediaType(){

                const minSize = Math.min(document.body.offsetWidth, document.body.offsetHeight);

                if(minSize > 1023){
                    return { name: "Desktop", images: 3 };
                } else if(minSize > 767){
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

                    results.push({
                        image: this.images[selector][device],
                        link: this.images[selector].link,
                        id: this.images[selector].id
                    });
                }

                this.iteration = selector + 1;
                localStorage.setItem("iteration", this.iteration);

                return results;

            },
            run(){

                const type = this.determineMediaType();

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