precision mediump float;

uniform float uTime;

varying vec2 vUv;  // comes from vertex shader
varying vec3 vposition;  // comes from vertex shader

void main() {
    vUv = uv; // pass UV down to fragment shader
    vposition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
