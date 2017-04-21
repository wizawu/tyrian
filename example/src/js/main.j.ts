import { constructor as Chalk } from "chalk"

const chalk = new Chalk({ enabled: true })

class ColorfulJSON {
    date: string = chalk.yellow(new Date().toJSON())
    random: string = chalk.green(Math.random().toString())
}

;(print as any)(JSON.stringify(new ColorfulJSON()))

;(print as any)(Packages.ro)
let ro = Packages.ro
;(print as any)(ro.pippo.core.Pippo)