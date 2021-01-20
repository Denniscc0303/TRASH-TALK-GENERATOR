// generate_trashtalk.js

// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTrashTalk function
function generateTrashTalk(options) {
  // define trash talk
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // by judgement to create a taskTalk to store task trash talk
  let taskTalk = ''
  if (options.occupation === '工程師') {
    taskTalk += sample(task.engineer)
  }

  if (options.occupation === '設計師') {
    taskTalk += sample(task.designer)
  }

  if (options.occupation === '企業家') {
    // return sample(task.entrepreneur)
    taskTalk += sample(task.entrepreneur)
  }

  // occupation undefinded condition
  if (!options.occupation) {
    return '你還沒有選要對誰說幹話喔!!'
  }
  // start generating trash talk
  let trashTalk = `身為一個${options.occupation},${taskTalk},${sample(phrase)}!`

  // return the generated trash talk
  return trashTalk
}

// export generatePassword function for other files to use
module.exports = generateTrashTalk