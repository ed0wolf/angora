package main

import (
  "github.com/codegangsta/martini"
  "encoding/json"
)

func main() {
  m := martini.Classic()
  m.Use(martini.Static("assets"))
  m.Get("/hello/:name", func(params martini.Params) string {
    return "Hello " + params["name"]
  })
  m.Get("/test", func() []byte {
    p := Person{"Ed", "01858 575 424"}
    b, _ := json.Marshal(p)
    
    return b
  })
  m.Run()
}

type Person struct {
    Name string
    Phone string
}
