var sortAsc  = document.createElement("SPAN"),
        sortDesc = document.createElement("SPAN");
    var table1 = document.getElementById("table-prop");
        sortAsc.innerHTML = "&#9660;";
    sortDesc.innerHTML = "&#9650;"; 

var sortTable = (function (GLOB) {
    var DOC = GLOB.document;
    /**
     * @param {HTMLTable} elementTable - ссылка на таблицу
     * @param {HTMLElement} elementAsc - ссылка на html - элемент-значек для прямой сортировки 
     * @param {HTMLElement} elementDesc - ссылка на html - элемент-значек для обратной сортировки
     * @param {[][]} [sortRules] - набор правил определения содержимого ячеек столбцов типа: [ ["number", 1], ["string"], ..., ["integer", 2] ]
     * @param {Function} [onSortAsc] - коллбек, вызываемый при прямой сортировке
     * @param {Function} [onSortDesc] - коллбек, вызываемый при обратной сортировке
     */ 
    return function (elementTable, elementAsc, elementDesc, sortRules, onSortAsc, onSortDesc) {
    
		if (!elementTable || !elementAsc || !elementDesc) {
            throw new Error ("sortTabe ERROR: Parameters 1,2,3 - is required!");                
        }        
        var rows = elementTable.tBodies[0].rows,
            cellsCnt = elementTable.rows[0].cells.length,
			sortState = {dir:"none", idx: null},
            rules = sortRules || [],
            presets = {
                integer : /\d+/g,
                number  : /(\d+(\.\d+)?)/g,
                word    : /\S+/g,
                string  : "string"
            },
            hcell, sorter, i, j;
        // озаполняем массив правил извлечения чисел
        for (i = 0; i < cellsCnt; i++) {
            (({}).toString.call(rules[i]) !== "[object Array]") && (rules[i] = ["string", 0]);
        }        
        
        /* Получить элемент управления сортировкой */
        function getSorter(idx, table, type) {			
            var sorterAsc = DOC.createElement("SPAN"),
                sorterDesc = DOC.createElement("SPAN");
                
            sorterAsc.appendChild(elementAsc.cloneNode(true));
            sorterDesc.appendChild(elementDesc.cloneNode(true));
            
            /* Функция извлечения данных из строки */
            function extractData(str, rule, index) {
                var pattern, result;
                // Если в правиле казано "string"
                if (rule === "string") {
                    return str;
                } 
                // Если в правиле пришло регулярное выражение:
                else if (({}).toString.call(rule) === "[object RegExp]") {
                    pattern = rule;
                } 
                // Если в правиле не указан тип или указан неправильно:
                else if (typeof presets[rule] !== "undefined") {
                    pattern = presets[rule];
                }                
                // Если индекс не указан:
                index = index ? index : 0;                
                // Массив совпадений
                result = str.match(pattern);
                // Если есть результат и он содержит нужный элемент
                if (result && result[index]) {
                    // Это частный случай правила "word"
                    if (rule == "word") return result[index];
                    return new Number(result[index]);
                }
                return str;
            }
            
            /* Вынесем операции сравнения в функции. 
                Это позволит оптимизировать код обработчика кликов*/
            function gt(a, b) {return (a > b);}
            function lt(a, b) {return (a < b);}      
            
            /* Функция кроссбраузерно меняет местами узлы DOM */
            function swapNode(node1, node2) {
                var next = node1.nextSibling,
                    parentNode = node1.parentNode;					
                if (node1.swapNode) {
                    return node1.swapNode(node2);
                }				
                node2.parentNode.replaceChild(node1, node2);
                parentNode.insertBefore(node2, next);
            }
            /* Это обработчик кликов по элементам управления сортировщика */
            function clickHandler(compareFunc, sortDir, callback) {
				/* Если колонка уже отсортирована в нужном направлении - на выход */
				if (sortState.dir === sortDir && sortState.idx === idx) { 
                    return false; 
                }				
				/* Пузырьковая сортировка */
                for (i = 0; i < rows.length - 1; i += 1) {
                    for (j = i + 1; j < rows.length; j += 1) {
                        compareFunc(
                            extractData(rows[i].cells[idx].innerText, rules[idx][0], rules[idx][1]), 
                            extractData(rows[j].cells[idx].innerText, rules[idx][0], rules[idx][1])
                        ) && swapNode(rows[i], rows[j]);
                    }
                }
                /* Пузырьковая сортировка конец */
                
				/* Установка состояния "Отсортировано" (направление и колонка) */
				sortState.dir = sortDir; 
				sortState.idx = idx;
                
                /* Вызываем обработчик, если он назначен */
                callback && callback(sortState);
            }
            
            /* Сортировка в прямом порядке */
            sorterAsc.onclick   = function () {
                clickHandler(lt, "asc", onSortAsc);
            };
            /* Сортировка в обратном порядке */
            sorterDesc.onclick  = function () {
                clickHandler(gt, "desc", onSortDesc);
            };
            
            return {asc : sorterAsc, desc : sorterDesc};
        }
		/* Пройдёмся по всем ячейкам первой строки и вставим в них значки-сортировщика: */
        for (i = 1; i < cellsCnt; i += 1) {
            sorter = getSorter(i, elementTable);
            hcell  = elementTable.rows[0].cells[i];
			
            hcell.appendChild(sorter.asc);
            hcell.appendChild(sorter.desc);
        }
        return;
    };
}(this));