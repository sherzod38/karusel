class Carousel {
    constructor(options) {
        this.carousel = document.querySelector(options.parentSelector);
        this.carouselItems = document.querySelectorAll(`${options.parentSelector}-item`);
        this.time = options.time;

        this.carousel.style.padding = '0px';
        this.carousel.style.borderRadius = '34px';
        this.carousel.style.marginTop = '40px';
        this.carousel.style.overFlow = 'hidden';


        this.carouselItems.forEach((item, index) => {
            item.style.height = options.size.height + 'px';

            item.style.width = options.size.width + 'px';
            item.style.objectFit = 'cover';
            item.style.transition = 'all ease 1s'

            if(index != 0) {
                item.style.width = '0'
            }
        });

        this.carouselItemCHANGER();
    }

    carouselSwitcher(activElementIndex) {
        this.carouselItems.forEach((item, index) => {
            if(index == activElementIndex) {
                item.style.width = '600px';

            }else {
                item.style.width = '0';
            }
        })
    }

    carouselItemCHANGER() {
        let activElementIndex = 0;

        setInterval(() => {
            if(activElementIndex < this.carouselItems.length -1 ) {
                this.carouselSwitcher(activElementIndex);
                activElementIndex = activElementIndex + 1;

            }else {
                this.carouselSwitcher(activElementIndex);
                activElementIndex = 0;
            }
        }, this.time)
    }
}