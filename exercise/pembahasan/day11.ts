// 1
function phoneNumber(input: string) {
  if (input.length !== 12) {
    return "Invalid phone number";
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] < "0" || input[i] > "9") {
      return "Invalid phone number";
    }
  }

  input = "62" + input.slice(1);

  let template: string = "(xxxx)-xxxx-xxxxx";

  input.split("").forEach((item) => {
    template = template.replace("x", item);
  })

  return template;
}

console.log(phoneNumber("081155509090"));

// 2


