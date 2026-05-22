# neostronghold Frontend

The frontend for [neostronghold](https://neostronghold.com) — a premium open-source smart home platform.

Built with Lit, TypeScript, shadcn/ui, and Tailwind CSS v4.

## Development

```bash
script/setup
script/develop
```

The dev server will be available at `http://localhost:8124` and connects to a HA Core instance at `http://localhost:8123`.

To point at a different Core instance:
```bash
script/develop_and_serve -c http://192.168.2.182:8123
```

## License

Apache 2.0
