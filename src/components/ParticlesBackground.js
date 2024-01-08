import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'


const ParticleBackground = () => {
  const Particlesinit = async (main) => {
    console.log(main)
    await loadFull(main)
  }
  return (
    <div>
      <Particles init={Particlesinit} options={
        {
          "particles": {
            "number": {
              "value": 50,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#00ff00"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 10,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffd700",
              "opacity": 1,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 10,
                "speed": 3
              },
              "repulse": {
                "distance": 90,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "background": {
            "color": "#000"
          },
          "z-index":1
        }
      } />
    </div>
  )
}
export default ParticleBackground;