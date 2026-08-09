using System;

namespace HelloCs;

public static class FFI {
    public static string helloCs(string name) {
        return "Hello " + name + " from Pure C# FFI (auto-wrapped by sharpurs)!";
    }
}
