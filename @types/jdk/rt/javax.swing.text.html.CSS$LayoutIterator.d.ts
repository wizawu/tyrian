declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                interface CSS$LayoutIterator {
                    WorstAdjustmentWeight: int
                    setOffset(arg0: int): void
                    getOffset(): int
                    setSpan(arg0: int): void
                    getSpan(): int
                    getCount(): int
                    setIndex(arg0: int): void
                    getMinimumSpan(arg0: float): float
                    getPreferredSpan(arg0: float): float
                    getMaximumSpan(arg0: float): float
                    getAdjustmentWeight(): int
                    getBorderWidth(): float
                    getLeadingCollapseSpan(): float
                    getTrailingCollapseSpan(): float
                }
            }
        }
    }
}