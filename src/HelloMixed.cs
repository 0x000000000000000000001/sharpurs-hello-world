using System;

namespace HelloMixed;

public static class CSharpLogic {
    public static string DoComplexCSharpStuff(string name) {
        return "Hello " + name + " from C# logic (manually wrapped by F# FFI)!";
    }
}
