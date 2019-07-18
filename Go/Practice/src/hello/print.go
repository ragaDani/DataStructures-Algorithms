// A workspace is a directory hierarchy, contains go source code, package objects and command binaries that package provides from that source code.

package main

import (
	"fmt"
	"stringutil"
)


func main() {
	sum := Sum(10,20)
	fmt.Println(sum)
	fmt.Println(stringutil.Reverse("hello world"))
}