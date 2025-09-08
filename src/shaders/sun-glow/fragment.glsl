precision mediump float;

uniform vec3 uCameraPosition;
uniform vec3 uObjectCenter;
uniform float uRadius;

varying vec3 vWorldPosition;

void main() {
    // Vector from fragment to object center
    vec3 fragToCenter = vWorldPosition - uObjectCenter;

    // Dot product with camera direction (scalar)
    float alpha = -dot(normalize(fragToCenter), normalize(uCameraPosition)) * 0.5 + 0.;
    // alpha is now in [0,1] range

    // Radial distance from the center
    float dist = length(fragToCenter);

    // Normalize distance based on radius
    float fade = smoothstep(dist, uRadius, 0.0) - 0.5;

    // Yellow base color
    vec3 yellow = vec3(1.0, 1.0, 0.0);

    // Invert the fade * alpha to make yellow stronger in black areas
    vec3 color = yellow * ((alpha));

    // Set final fragment color
    gl_FragColor = vec4(color, 1.0);

    float edgeAlpha = dot(uCameraPosition, fragToCenter);
    gl_FragColor = vec4(edgeAlpha);
}