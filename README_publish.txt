
Base file used: /mnt/data/index.html

Files to deploy together (same folder):
- index.html
- manifest.webmanifest
- sw.js
- icon-512x512.png
- icon-192x192.png
- icon-180x180.png
- icon-152x152.png
- icon-120x120.png
- favicon.png (אם יש)
- logo.png  (לשימוש באתר)

Notes:
- האייקונים נוצרו מלוגו עם רקע לבן, והלוגו תופס ~80% משטח האייקון.
- ה-manifest מגדיר name/short_name = PHK ורקע/Theme לבן.
- ה-service worker פשוט, מיועד לטעינה מהירה. ניתן להסיר אם לא נדרש.
- סקריפט הכיווץ האוטומטי רץ רק במסכים עד 430px.
