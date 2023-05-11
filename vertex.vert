#version 320 es
precision mediump float;
layout (location = 0) in vec3 aPos;
uniform float time;
mat2 rotate2d(float _angle) {
    return mat2(cos(_angle), -sin(_angle),
                sin(_angle), cos(_angle));
}
void main()
{
    vec2 st = vec2(aPos.x, aPos.y);
    st = rotate2d(time) * st;
    gl_Position = vec4(st, aPos.z, 1.0);
}
