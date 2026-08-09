module Main where

import Prelude
import Effect (Effect)
import Effect.Console (log)

import HelloFs (helloFs)
import HelloCs (helloCs)
import HelloMixed (helloMixed)

main :: Effect Unit
main = do
  log "=== Sharpurs Hello World ==="
  log (helloFs "Alice")
  log (helloCs "Bob")
  log (helloMixed "Charlie")
