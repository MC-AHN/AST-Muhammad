import 'dotenv/config';
import { db } from './index.js';
import bcrypt from 'bcryptjs';
import { todos, users } from './schema.js';
import { todo } from 'node:test';

async function seed() {
    console.log('Sedding database...');

    // Hapus data lama (opsional)
    await db.delete(todos);
    await db.delete(users);

    // Buat user dummy dengan password yang sudah di-hash
    const plainPassword = 'password123';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    
    const user1 = await db.insert(users).values({
        username: 'andi',
        // Di aplikasi nyata, password ini harus di-hash!
        // Tapi untuk seed, kita bisa gunakan text biasa.
        password: hashedPassword,
    }).returning();

    await db.insert(todos).values([
        { note: "Belajar Drizzle ORM", userId: user1[0].id },
        { note: "Membuat API dengan Hono", userId: user1[0].id },
    ]);

    console.log('✅ Sedding completed!');
    process.exit(0);
}

seed().catch((err) => {
    console.error('❌ seeding failed:', err);
    process.exit(1);
});