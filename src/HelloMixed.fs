module HelloMixed

let helloMixed name = 
    // Here we manually call the C# logic from F#
    HelloMixed.CSharpLogic.DoComplexCSharpStuff(unbox<string> name)
