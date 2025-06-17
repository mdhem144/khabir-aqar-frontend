# Khabir Aqar – Next.js 14 Skeleton (v2)

تحديث سريع لحل تعارض ESLint عند النشر على **Vercel**.

- ESLint ثابت على `8.56.0`
- ملف `.npmrc` يفرض `legacy-peer-deps=true`
- `vercel.json` يثبت أمر التثبيت على `npm ci` لضمان التبعية الدقيقة
