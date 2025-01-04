export interface Order {
    _id: string;

    /**
     * 訂單編號
     */
    sid: string;

    /**
     * 姓名 
     */
    name: string; 

    /**
     * 電話號碼
     */
    phoneNumber: string;

    /**
     * 內容
     */
    content?: string | undefined;

    /**
     * 總金額
     */
    total?: string | undefined;

    /**
     * 備註
     */
    remark?: string | undefined;
}