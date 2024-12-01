varying vec2 vUv;

void main() {
    vec3 darkGreen = vec3(0.0, 0.6, 0.0);
    vec3 lightGreen = vec3(0.0, 0.7, 0.0);

    float patchSize = 0.01;
    float lines = floor(vUv.x / patchSize) + floor(vUv.y / patchSize);

    // Alternating dark and light green patches
    vec3 color = mod(lines, 2.0) < 1.0 ? darkGreen : lightGreen;

    gl_FragColor = vec4(color, 1.0);
}