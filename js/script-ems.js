const $ = (id) => {
    return document.getElementById(id)
}

// GET DOM ELEMENTS
let employeeID = $('id')
let employeeName = $('name')
let extension = $('extension')
let email = $('email')
let department = $('department')
let form = $('addForm')
let employeeTable = $('empTable')
let employees = []
let tbody = employeeTable.getElementsByTagName('tbody')[0]


// CREATE AN ARRAY OF EMPLOYEES
let defaultEmployees = [
    ['12345678', 'James Jones', '1234', 'jjones@example.com', 'Administrative'],
    ['09876543', 'Lorelai Gilmore', '0123', 'lgilmore@example.com', 'Executive'],
    ['08642086', 'Rachel Ray', '0864', 'rray@example.com', 'Marketing'],
    ['13579012', 'Michael B. Jordan', '9012', 'mjordan@example.com', 'Sales'],
    ['00000001', 'Chase Stokes', '0001', 'cstokes@example.com', 'Engineering']
]

// CREATE THE DELETE BUTTON
function createDeleteBtn() {
    let deleteBtn = document.createElement('button');
    let deleteBtnText = document.createTextNode('X');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className = 'btn btn-danger btn-sm text-danger';
    return deleteBtn
}

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', () => {
    let storedEmployees = localStorage.getItem('employees') || ''
    if (storedEmployees !== '') {
        employees = JSON.parse(storedEmployees)
    } else {
        employees = defaultEmployees
    }
    setStorage(employees)
    buildGrid()
})

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID = parseInt($('id').value)
    let employeeName = $('name').value
    let extension = parseInt($('extension').value)
    let email = $('email').value
    let department = $('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = []
    newEmployee[0] = employeeID
    newEmployee[1] = employeeName
    newEmployee[2] = extension
    newEmployee[3] = email
    newEmployee[4] = department
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees[employees.length] = newEmployee
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
        // CONFIRM THE DELETE
        if(confirm('Are you sure you want to delete this row?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        // REMOVE EMPLOYEE FROM ARRAY
        let myIndex = e.target.parentNode.parentNode.rowIndex
        employees.splice(myIndex-1, 1);
        // BUILD THE GRID
        buildGrid()
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    employeeTable.removeChild(tbody)
    // REBUILD THE TBODY FROM SCRATCH
    tbody = document.createElement('tbody')
    employeeTable.appendChild(tbody)

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let employee of employees) {
        // REBUILDING THE ROW STRUCTURE
        let row = document.createElement('tr')
        for (let info of employee) {
            let cell = document.createElement('td')
            cell.innerHTML = info
            row.appendChild(cell)
        }
        let deleteBtnCell = document.createElement('td')
        deleteBtnCell.appendChild(createDeleteBtn())
        row.appendChild(deleteBtnCell)

        tbody.appendChild(row)
        // BIND THE TBODY TO THE EMPLOYEE TABLE
    }
    //UPDATE EMPLOYEE COUNT
    updateEmployeeCount()
    //STORE THE ARRAY IN STORAGE
    setStorage(employees)  
}

//SET STORAGE FUNCTION
function setStorage(employees) {
    localStorage.setItem('employees', JSON.stringify(employees))
}


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER (FROM ASSIGNMENT 6 RACHEL ADDED)
function updateEmployeeCount() {
    let employeeCount = employeeTable.rows.length-1
    $("empCount").value = (`(${employeeCount})`)
}

