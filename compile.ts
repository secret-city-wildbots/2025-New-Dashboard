const command = new Deno.Command(Deno.execPath(), {
    args: [
        "compile",
        "--allow-all",
        "-o", 
        "dashboard",
        "--icon",
        "public/favicon.ico",
        "--include",
        "public",
        "index.ts",
        "production",
    ]
});

command.spawn();