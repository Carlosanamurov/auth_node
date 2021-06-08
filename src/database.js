import { Pool} from 'pg'

/*export const pool = new Pool({
    host:'ec2-54-243-92-68.compute-1.amazonaws.com',
    user:'mptmgnzncimmeu',
    password:'ro643b14d1e860a676b32ad44466ccbfe14bcb0eca8246cbd0250b05898f3ce63cot',
    database:'d4hraoa6b4bf97',
    port:5432,
    ssl: true
})*/


export const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'root',
    database:'bdalmacen',
    port:5432
})