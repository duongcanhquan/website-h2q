# Design — H2Q workspace bootstrap

| Meta | Giá trị |
|------|---------|
| Ngày | 2026-11-02 |
| Quyết định user | Option **A** (mirror VMIT) + push GitHub |

## Mục tiêu

1. Ghi nhận / thống nhất quy trình agent qua Cursor rules.
2. Dễ theo dõi chỉnh sửa (`docs/CHANGELOG.md` + checklist).
3. Reference design: vendor `awesome` + `awesome-web-design`.
4. Kết nối remote https://github.com/duongcanhquan/website-h2q

## Phạm vi

- Rules, AGENTS, docs skeleton, skill kickoff, reference clones, git init + push.
- **Không** scaffold Next.js / brand thật trong đợt này.

## Cấu trúc tuân thủ

Giống VMIT: `.cursorrules` index → `.cursor/rules/h2q-*.mdc` → `AGENTS.md` → `docs/*`.
App tương lai: `h2q-website/`.
