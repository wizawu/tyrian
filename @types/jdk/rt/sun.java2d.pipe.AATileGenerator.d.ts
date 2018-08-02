declare namespace sun {
    namespace java2d {
        namespace pipe {
            interface AATileGenerator {
                getTileWidth(): int
                getTileHeight(): int
                getTypicalAlpha(): int
                nextTile(): void
                getAlpha(arg0: byte[], arg1: int, arg2: int): void
                dispose(): void
            }
        }
    }
}