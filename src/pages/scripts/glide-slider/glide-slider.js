import Glide from '@glidejs/glide'

import '../../../blocks/glide/glide.theme.css'
import '../../../blocks/glide/glide.core.css'

export default class GlideSlider {
    constructor () {
        this.activeSlider = this.activeSlider.bind(this);
        this.activeSlider();
    }

    activeSlider () {
        const glide = new Glide('.glide', {
            type: 'slider',
            type: "slider",
                  perView: 3,
                  startAt: 0,
                  focusAt: 'center',
                  peek: 100,
                  gap: 16,
            breakpoints: {
                1440: {
                  type: "slider",
                  perView: 3,
                  startAt: 0,
                  focusAt: 'center',
                  peek: 100,
                  gap: 16,
                },
                768: {
                  type: "slider",
                  perView: 2.1,
                  startAt: 0,
                  focusAt: 0,
                  peek: 20,
                  gap: 8
                },
                576: {
                  type: "slider",
                  perView: 1.05,
                  startAt: 0,
                  focusAt: 'center',
                  gap: 8,
                  peek: 8
                }
            }
        })
        glide.mount();
    }
}



