varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 pos = position;
    pos += vec3(0.5, -0.5, 0.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}