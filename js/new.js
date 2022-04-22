let reg =/\S+/g
let statement = "my name is kayden"
let results = statement.match(regex)
let real = results.length
if (real = statement.length){
    return "nice one"
}else if (words > statement.length){
    return "exceeded limit"
}else{
    return "try harder"
}