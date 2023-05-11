#ifndef OPENGL_WINDOW_ENGINE_HXX
#define OPENGL_WINDOW_ENGINE_HXX
#include <string>
namespace eng
{
constexpr int width  = 800;
constexpr int height = 600;

class engine
{
public:
    virtual bool load_shader(std::string vertexPath,
                             std::string fragmentPath) = 0;

    virtual bool initialize_engine() = 0;

    virtual void draw_triangle() = 0;
    virtual bool swap_buff()     = 0;
};

engine* create_engine();
void    destroy_engine(engine* e);
} // namespace eng
#endif // OPENGL_WINDOW_ENGINE_HXX
