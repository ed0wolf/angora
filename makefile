all: build

run: build
	go run ./server.go

build: getDependencies
	go build
	
getDependencies:
	go get ./...
	
clean:
	rm angora
