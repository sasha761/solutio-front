<template>
  <div class="c-page-loader">
    <div class="c-page-loader__logo">
      <svg aria-hidden="true" focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
.c-page-loader {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.9);
	z-index: 10;
	&__logo {
		// animation: spin 2s linear infinite;
		width: 60px;
		height: 60px;
	}

	svg {
		opacity: .6;
    animation: 1.4s linear infinite rotator;
    display: inline-block;
		width: 100%;
		height: 100%;

		.path {
			// stroke: #fff
			stroke-dasharray: 280;
			stroke-dashoffset: 0;
			transform-origin: 50%;
			stroke: #000;
			animation: 1.4s ease-in-out infinite dash
		}
	}
}

@keyframes rotator {
	0% {
		transform: rotate(0)
	}
	to {
		transform: rotate(270deg)
	}
}

@keyframes dash {
	0% {
		stroke-dashoffset: 280px
	}
	50% {
		stroke-dashoffset: 75px;
		transform: rotate(135deg)
	}
	to {
		stroke-dashoffset: 280px;
		transform: rotate(450deg)
	}
}
</style>