#version 320 es
precision mediump float;
out vec4 FragColor;
uniform float time;
uniform vec2 resol;

void main()
{

    vec2 uv = (gl_FragCoord.xy - 0.5 * resol.xy) / resol.y;
    vec3 col = vec3(0);
    col += 0.01 / length(uv + vec2(0, 0.3));
    col += 0.01 / length(uv + vec2(0, 0.25));
    col += 0.01 / length(uv + vec2(0, 0.2));
    col += 0.01 / length(uv + vec2(0, 0.15));
    col += 0.01 / length(uv + vec2(0, 0.10));
    col += 0.01 / length(uv + vec2(0, 0.05));
    col += 0.01 / length(uv - vec2(0, 0.3));
    col += 0.01 / length(uv - vec2(0, 0.25));
    col += 0.01 / length(uv - vec2(0, 0.2));
    col += 0.01 / length(uv - vec2(0, 0.15));
    col += 0.01 / length(uv - vec2(0, 0.10));
    col += 0.01 / length(uv - vec2(0, 0.05));
    col += 0.01 / length(uv - vec2(0.1, 0.25));
    col += 0.01 / length(uv - vec2(0.15, 0.2));
    col += 0.01 / length(uv - vec2(0.2, 0.15));
    col += 0.01 / length(uv - vec2(0.25, 0.1));
    col += 0.01 / length(uv - vec2(-0.1, 0.25));
    col += 0.01 / length(uv - vec2(-0.15, 0.2));
    col += 0.01 / length(uv - vec2(-0.2, 0.15));
    col += 0.01 / length(uv - vec2(-0.25, 0.1));
    col += 0.01 / length(uv);
    col *= vec3(sin(time), cos(time), tanh(time));

    FragColor = vec4(col, 1);
}