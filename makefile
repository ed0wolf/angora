all: server

server: dependencies
	go build
	
dependencies:
	go get ./...
	
clean:
	rm server
