FROM golang:1.21 as build

WORKDIR /src

COPY <<EOF /src/main.go
package main
import "fmt"
func main() {
  fmt.Println("Full Cycle Rocks!!!")
}
EOF
RUN go build -o /bin/fullcyle ./main.go

FROM scratch
COPY --from=build /bin/fullcyle /bin/fullcyle
CMD ["/bin/fullcyle"]