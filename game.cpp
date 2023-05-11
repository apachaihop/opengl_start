#include "engine.hxx"
#include <SDL_events.h>
#include <cstdlib>
#include <memory>

int main()
{
    std::unique_ptr<eng::engine, void (*)(eng::engine*)> engine(
        eng::create_engine(), eng::destroy_engine);

    engine->initialize_engine();

    engine->load_shader(
        "/home/apachai/CLionProjects/opengl_window/vertex.vert",
        "/home/apachai/CLionProjects/opengl_window/fragment.frag");
    bool continue_loop = true;
    while (continue_loop)
    {
        SDL_Event event;

        while (SDL_PollEvent(&event))
        {
            if (event.type == SDL_EVENT_QUIT)
            {
                continue_loop = false;
            }
        }
        engine->draw_triangle();
        engine->swap_buff();
    }

    return EXIT_SUCCESS;
}
