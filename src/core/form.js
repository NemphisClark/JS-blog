export class Form {
  constructor(containerId, controls) {
    this.containerId = containerId
    this.controls = controls
  }

  value() {
    const value = {}

    Object.keys(this.controls).forEach((control) => {
      value[control] = this.containerId[control].value
    })

    return value
  }

  isValid() {
    let isFormValid = true

    Object.keys(this.controls).forEach((control) => {
      const validators = this.controls[control]

      let isValid = true
      validators.forEach((validator) => {
        isValid = validator(this.containerId[control].value) && isValid
      })

      // if (!isValid) {
      //   setError(this.form[control])
      // }

      isFormValid = isFormValid && isValid
    })

    return isFormValid
  }
}

// function setError($control) {
//   console.log($control)
// }
