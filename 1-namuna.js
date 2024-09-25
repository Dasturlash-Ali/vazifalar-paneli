console.log("Vazifalar paneli");
let tasks = [];

function displayCommands() {
    console.log("Menyu tanlang: ");
    console.log("add: Yangi vazifa qo'shish");
    console.log("list: Barcha vazifalarni ko'rsatish");
    console.log("delete: Mavjud vazifani o'chirish");
    console.log("exit: Dasturdan chiqish");
}

function addTask() {
    let taskName = prompt("Vazifa qo'shing: ");
    if (taskName) {
        tasks.push({ name: taskName, completed: false });
        console.log("Vazifa qo'shildi.");
    } else {
        console.log("Vazifa nomi kiritilmadi.");
    }
}

function listTasks() {
    if (tasks.length === 0) {
        console.log("Hech qanday vazifa mavjud emas.");
    } else {
        console.log("Barcha vazifalar: ");
        tasks.forEach((task, index) => {
            const status = task.completed ? "Bajarilgan" : "Bajarilmagan";
            console.log(`${index + 1}) ${task.name} - ${status}`);
        });
    }
}

function deleteTask() {
    let taskIndex = Number(prompt("O'chiradigan vazifani raqamini kiriting: ")) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
        console.log("Vazifa o'chirildi.");
    } else {
        console.log("Noto'g'ri raqam, vazifa o'chirilmadi.");
    }
}

function toggleCompletion() {
    let taskIndex = Number(prompt("Vazifaning raqamini kiriting (bajarilgan/bajarilmagan): ")) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        console.log("Vazifa holati o'zgartirildi.");
    } else {
        console.log("Noto'g'ri raqam.");
    }
}

function main() {
    while (true) {
        displayCommands();
        let command = prompt("Buyruq kiriting: ").toLowerCase();

        if (command === "add") {
            addTask();
        } else if (command === "list") {
            listTasks();
        } else if (command === "delete") {
            deleteTask();
        } else if (command === "exit") {
            console.log("Dasturdan chiqish.");
            break;
        } else {
            console.log("Noto'g'ri tanlov.");
        }
    }
}

main();