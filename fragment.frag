#version 320 es

precision mediump float;
out vec4 FragColor;
in vec3 ourColor;
in vec2 TexCoord;
uniform sampler2D ourTexture;
void main()
{
    vec4 tex = texture(ourTexture, TexCoord);
    if (tex.a == 0.0 && tex.r == 0.0 && tex.g == 0.0 && tex.b == 0.0) {
        discard;
    }
    FragColor = texture(ourTexture, TexCoord);
}