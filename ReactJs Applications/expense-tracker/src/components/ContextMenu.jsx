/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function ContextMenu({
    menuPosition,
    setMenuPosition,
    rowId,
    setData,
    setExpense,
    expenses,
    setEditingRowId
}) {
    if (!menuPosition.left) return
    return (
        <div className="context-menu" style={{...menuPosition}}>
            <div onClick={() => {
                const { title, category, amount } = expenses.find((expense) => expense.id === rowId)
                setEditingRowId(rowId)
                setExpense({ title, category, amount })
                setMenuPosition({})
            }}
            >Edit</div>
            <div onClick={() => {
                setData((prevData) => prevData.filter((expense) => expense.id !== rowId))
                setMenuPosition({})
            }}
            >Delete</div>
        </div>
    )
}
