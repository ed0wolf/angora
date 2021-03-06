package main

import (
  "github.com/codegangsta/martini"
  "github.com/ed0wolf/rabbits"
  "encoding/json"
)

func main() {
  repo := rabbits.NewRepo()
  repo.Add(rabbits.Rabbit{"Ed", "Big bad rabbit", "http://www.alexandgregory.com/images/arctic_hares.boxing.jpg"})
  m := martini.Classic()
  m.Use(martini.Static("assets"))
  m.Get("/rabbits", func() []byte {
    b, err := json.Marshal(repo.GetAll())
    if err != nil {
      panic(err)
    }
    return b
  })
  m.Get("/rabbits/:name", func(params martini.Params) (int, []byte) {
    rabbit, ok := repo.Get(params["name"])
    if !ok {
      return 404, []byte("Could not find requested rabbit")
    }
    b, err := json.Marshal(rabbit)
    if err != nil {
      panic(err)
    }
    return 200, b
  })
  m.Run()
}