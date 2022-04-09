exports.genPassword = () => {
    return `RM${Math.floor(100000 + Math.random() * 900000)}`
  }
  