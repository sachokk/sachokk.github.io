var tfConfigP = {
    base_path: 'js/tablefilter/',
    alternate_rows: true,
    on_change: false,  
                    btn: true,  
                    enter_key: false,  

    
    col_number_format: [
        'US',  'string',
        'US', 'string', 'US',
        'US', 'US'
    ],
    display_all_text: "   all  ",
    col_0: "none",
    col_1: "select",
    col_3: "select",
    

    /* external filters */
    external_flt_grid: true,
    external_flt_grid_ids: [
        "inp-prop",
        "sel-creditor-prop",
       "inp-summ-min-prop",
        "sel-curr-prop",
        "inp-term-min-prop",
        "inp-return-min-prop",
        "inp-percent-min-prop"

        
    ],

    /* sorting feature */
    extensions: [{ name: 'sort' }]
};
 var tfConfigR = {
    base_path: 'js/tablefilter/',
    alternate_rows: true,
    on_change: false,  
                    btn: true,  
                    enter_key: false,  

    
    col_number_format: [
        'US',  'string',
        'US', 'string', 'US',
        'US', 'US'
    ],
    display_all_text: "   all  ",
    col_0: "none",
    col_1: "select",
    col_3: "select",
    

    /* external filters */
    external_flt_grid: true,
    external_flt_grid_ids: [
        "inp-req",
        "sel-creditor-req",
       "inp-summ-min-req",
        "sel-curr-req",
        "inp-term-min-req",
        "inp-return-min-req",
        "inp-percent-min-req"

        
    ],

    /* sorting feature */
    extensions: [{ name: 'sort' }]
};
var tfp = new TableFilter('table-prop', tfConfigP);
tfp.init();

var tfr = new TableFilter('table-req', tfConfigR);
tfr.init();

