<template>
    <div id="particles"></div>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

const html5 = "/flag/html5.svg";
const css3 = "/flag/css3.svg";
const javascript = "/flag/javascript.svg";
const vue = "/flag/vue.svg";
const react = "/flag/react.svg";
const angular = "/flag/angular.svg";
const es6 = "/flag/es6.svg";
const typescript = "/flag/typescript.svg";
const vite = "/flag/vite.svg";
const sass = "/flag/sass.svg";
const less = "/flag/less.svg";
const webpack = "/flag/webpack.svg";
const jquery = "/flag/jquery.svg";
const dart = "/flag/dart.svg";
const flutter = "/flag/flutter.svg";
const nodejs = "/flag/nodejs.svg";

const imgs = [
    {
        name: "html5",
        src: html5,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "css3",
        src: css3,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "javascript",
        src: javascript,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "vue",
        src: vue,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "react",
        src: react,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "angular",
        src: angular,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "es6",
        src: es6,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "typescript",
        src: typescript,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "vite",
        src: vite,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "sass",
        src: sass,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "less",
        src: less,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "webpack",
        src: webpack,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "jquery",
        src: jquery,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "dart",
        src: dart,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "flutter",
        src: flutter,
        gif: false,
        height: 32,
        width: 32,
    },
    {
        name: "nodejs",
        src: nodejs,
        gif: false,
        height: 32,
        width: 32,
    },
];

const imgNames = imgs.map((item) => {
    let obj = {
        name: item.name,
    };
    return obj;
});

const options = {
    autoPlay: true,
    background: {
        color: {
            value: "rgba(0,0,0,0.1)",
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1,
    },
    backgroundMask: {
        composite: "destination-out",
        cover: {
            color: {
                value: "rgba(0,0,0,0.1)",
            },
            opacity: 1,
        },
        enable: false,
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
        enable: true,
        zIndex: -1,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
            },
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                },
            },
            resize: {
                delay: 0.5,
                enable: true,
            },
        },
        modes: {
            trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
            },
            attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
            },
            bounce: {
                distance: 200,
            },
            bubble: {
                distance: 400,
                duration: 2,
                mix: false,
                opacity: 0.8,
                size: 40,
                divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: [],
                },
            },
            connect: {
                distance: 80,
                links: {
                    opacity: 0.5,
                },
                radius: 60,
            },
            grab: {
                distance: 100,
                links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                },
            },
            push: {
                default: true,
                groups: [],
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: [],
                },
            },
            slow: {
                factor: 3,
                radius: 200,
            },
            light: {
                area: {
                    gradient: {
                        start: {
                            value: "#ffffff",
                        },
                        stop: {
                            value: "#000000",
                        },
                    },
                    radius: 1000,
                },
                shadow: {
                    color: {
                        value: "#000000",
                    },
                    length: 2000,
                },
            },
        },
    },
    manualParticles: [],
    particles: {
        bounce: {
            horizontal: {
                value: 1,
            },
            vertical: {
                value: 1,
            },
        },
        collisions: {
            absorb: {
                speed: 2,
            },
            bounce: {
                horizontal: {
                    value: 1,
                },
                vertical: {
                    value: 1,
                },
            },
            enable: false,
            maxSpeed: 50,
            mode: "bounce",
            overlap: {
                enable: true,
                retries: 0,
            },
        },
        color: {
            value: "#ffffff",
            animation: {
                h: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                },
                s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                },
                l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                },
            },
        },
        effect: {
            close: true,
            fill: true,
            options: {},
            type: [],
        },
        groups: {},
        move: {
            angle: {
                offset: 0,
                value: 90,
            },
            attract: {
                distance: 200,
                enable: false,
                rotate: {
                    x: 3000,
                    y: 3000,
                },
            },
            center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
            },
            path: {
                clamp: true,
                delay: {
                    value: 0,
                },
                enable: false,
                options: {},
            },
            outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
            },
            random: false,
            size: false,
            speed: 2,
            spin: {
                acceleration: 0,
                enable: false,
            },
            straight: false,
            trail: {
                enable: false,
                length: 10,
                fill: {},
            },
            vibrate: false,
            warp: false,
        },
        number: {
            density: {
                enable: true,
                width: 1920,
                height: 1080,
            },
            limit: {
                mode: "delete",
                value: 160,
            },
            value: 80,
        },
        opacity: {
            value: 1,
            animation: {
                count: 0,
                enable: false,
                speed: 2,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
            },
        },
        reduceDuplicates: false,
        shadow: {
            blur: 0,
            color: {
                value: "#000",
            },
            enable: false,
            offset: {
                x: 0,
                y: 0,
            },
        },
        shape: {
            close: true,
            fill: true,
            options: {
                image: imgNames,
            },
            type: "image",
        },
        size: {
            value: 16,
            animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
            },
        },
        stroke: {
            width: 0,
        },
        zIndex: {
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
        },
        destroy: {
            bounds: {},
            mode: "none",
            split: {
                count: 1,
                factor: {
                    value: 3,
                },
                rate: {
                    value: {
                        min: 4,
                        max: 9,
                    },
                },
                sizeOffset: true,
                particles: {},
            },
        },
        roll: {
            darken: {
                enable: false,
                value: 0,
            },
            enable: false,
            enlighten: {
                enable: false,
                value: 0,
            },
            mode: "vertical",
            speed: 25,
        },
        tilt: {
            value: 0,
            animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
            },
            direction: "clockwise",
            enable: false,
        },
        twinkle: {
            lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
            },
            particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
            },
        },
        wobble: {
            distance: 5,
            enable: false,
            speed: {
                angle: 50,
                move: 10,
            },
        },
        life: {
            count: 0,
            delay: {
                value: 0,
                sync: false,
            },
            duration: {
                value: 0,
                sync: false,
            },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 5,
                decay: 0,
                sync: false,
            },
            direction: "random",
            path: false,
        },
        orbit: {
            animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
                value: 45,
            },
            width: 1,
        },
        links: {
            blink: false,
            color: {
                value: "#fff",
            },
            consent: false,
            distance: 100,
            enable: false,
            frequency: 1,
            opacity: 1,
            shadow: {
                blur: 5,
                color: {
                    value: "#000",
                },
                enable: false,
            },
            triangles: {
                enable: false,
                frequency: 1,
            },
            width: 1,
            warp: false,
        },
        repulse: {
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1,
        },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    name: "Images",
    preload: imgs,
    motion: {
        disable: false,
        reduce: {
            factor: 4,
            value: true,
        },
    },
};


const init = async () => {
    await loadAll(tsParticles);
    tsParticles.load({
        id: "particles",
        options: {
            ...options,
        },
    });
}
onMounted(() => {
    init();
})
onUnmounted(() => {
})

</script>

<style lang="scss">
#particles canvas {
    background-color: transparent !important;
    opacity: 0.25 !important;
}
</style>