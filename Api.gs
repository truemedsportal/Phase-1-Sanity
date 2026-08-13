<style>

/* all your CSS here */

/* ==========================================================
   ROOT VARIABLES
========================================================== */

:root{

    --primary:#0F6CBD;
    --primary-dark:#0A4E8A;

    --success:#16A34A;
    --warning:#F59E0B;
    --danger:#DC2626;

    --info:#2563EB;

    --white:#FFFFFF;

    --background:#F5F7FB;

    --border:#E5E7EB;

    --text:#1F2937;

    --text-light:#6B7280;

    --shadow:0 4px 12px rgba(0,0,0,.08);

    --radius:12px;

    --transition:.25s ease;

    --sidebar-width:260px;

}



/* ==========================================================
   RESET
========================================================== */

*{

    margin:0;

    padding:0;

    box-sizing:border-box;

}

html{

    scroll-behavior:smooth;

    height:100%;

}

body{

    font-family:

        "Segoe UI",

        Roboto,

        Arial,

        sans-serif;

    background:var(--background);

    color:var(--text);

    overflow-x:hidden;

    min-height:100%;

}

/* ==========================================================
   LINKS
========================================================== */

a{

    text-decoration:none;

    color:inherit;

}



/* ==========================================================
   BUTTON RESET
========================================================== */

button{

    border:none;

    cursor:pointer;

    transition:var(--transition);

    font-family:inherit;

}



/* ==========================================================
   INPUT RESET
========================================================== */

input,
select,
textarea{

    font-family:inherit;

    outline:none;

}



/* ==========================================================
   IMAGES
========================================================== */

img{

    max-width:100%;

    display:block;

}



/* ==========================================================
   MAIN LAYOUT
========================================================== */

.main-container{

    display:flex;

    width:100%;

    min-height:100vh;

}



/* ==========================================================
   CONTENT
========================================================== */

.content{

    flex:1;

    padding:24px;

    overflow:auto;

}

/* ==========================================================
   HEADER
========================================================== */

.page-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:20px;

    flex-wrap:wrap;

    gap:15px;

}

.page-header h1{

    font-size:28px;

    color:var(--text);

}

.page-header p{

    color:var(--text-light);

    margin-top:5px;

}
/* ==========================================================
   CARD
========================================================== */

.card{

    background:var(--white);

    border-radius:var(--radius);

    box-shadow:var(--shadow);

    margin-bottom:20px;

    overflow:hidden;

}

.card-header{

    padding:18px 22px;

    border-bottom:1px solid var(--border);

    font-weight:600;

    font-size:17px;

}

.card-body{

    padding:22px;

}



/* ==========================================================
   GRID
========================================================== */

.form-grid{

    display:grid;

    grid-template-columns:

        repeat(auto-fit,minmax(260px,1fr));

    gap:18px;

}



/* ==========================================================
   FORM
========================================================== */

.form-group{

    display:flex;

    flex-direction:column;

}

.form-group label{

    margin-bottom:8px;

    font-weight:600;

}

.required{

    color:var(--danger);

}



/* ==========================================================
   INPUTS
========================================================== */

.form-control{

    width:100%;

    padding:12px 14px;

    border:1px solid var(--border);

    border-radius:8px;

    transition:var(--transition);

    font-size:14px;

    background:#fff;

}

.form-control:focus{

    border-color:var(--primary);

    box-shadow:0 0 0 3px rgba(15,108,189,.15);

}

textarea.form-control{

    resize:vertical;

    min-height:120px;

}



/* ==========================================================
   BUTTONS
========================================================== */

.primary-btn,

.secondary-btn,

.success-btn,

.danger-btn{

    padding:12px 18px;

    border-radius:8px;

    font-weight:600;

}

.primary-btn{

    background:var(--primary);

    color:#fff;

}

.primary-btn:hover{

    background:var(--primary-dark);

}

.secondary-btn{

    background:#ECEFF3;

}

.secondary-btn:hover{

    background:#DDE2E8;

}

.success-btn{

    background:var(--success);

    color:#fff;

}

.success-btn:hover{

    filter:brightness(.92);

}

.danger-btn{

    background:var(--danger);

    color:#fff;

}

.danger-btn:hover{

    filter:brightness(.92);

}



/* ==========================================================
   BUTTON ROW
========================================================== */

.button-row{

    display:flex;

    gap:12px;

    flex-wrap:wrap;

    margin-top:20px;

}
/* ==========================================================
   SIDEBAR
========================================================== */

.sidebar{

    width:280px;

    min-width:280px;

    height:100vh;

    min-height:100%;

    align-self:stretch;

    position:sticky;

    top:0;

    left:0;

    display:flex;

    flex-direction:column;

    background:linear-gradient(
        180deg,
        #0B5ED7 0%,
        #0A58CA 100%
    );

    color:#FFFFFF;

    box-shadow:6px 0 24px rgba(0,0,0,.12);

    overflow:hidden;

}

/* ==========================================================
   LOGO
========================================================== */

.sidebar-logo{

    padding:28px 24px;

    text-align:center;

    border-bottom:1px solid rgba(255,255,255,.12);

}

.sidebar-logo-img{

    width:170px;

    max-width:100%;

    height:auto;

    display:block;

    margin:0 auto 16px;

}

.sidebar-logo.logo-unavailable::before{
    content:"TrueMeds";
    display:block;
    margin:0 auto 16px;
    color:#FFFFFF;
    font-weight:800;
    font-size:28px;
}

.loader-box.logo-unavailable::before{
    content:"TrueMeds";
    display:block;
    color:#1469BE;
    font-weight:800;
    font-size:28px;
    margin:0 auto 24px;
}

.sidebar-title h1{

    margin:0;

    font-size:24px;

    font-weight:700;

    color:#FFFFFF;

    letter-spacing:.3px;

}

.sidebar-title p{

    margin:8px 0 0;

    font-size:14px;

    color:rgba(255,255,255,.85);

    line-height:1.5;

}

/* ==========================================================
   USER
========================================================== */

.sidebar-user{

    display:flex;

    flex-direction:column;

    align-items:center;

    justify-content:center;

    padding:26px 20px;

    border-bottom:1px solid rgba(255,255,255,.12);

}

.user-avatar{

    width:78px;

    height:78px;

    border-radius:50%;

    display:flex;

    align-items:center;

    justify-content:center;

    background:rgba(255,255,255,.18);

    border:3px solid rgba(255,255,255,.28);

    color:#FFFFFF;

    font-size:30px;

    font-weight:700;

    margin-bottom:16px;

    box-shadow:0 10px 24px rgba(0,0,0,.18);

    position:relative;

    overflow:hidden;

    isolation:isolate;

}

.user-avatar.role-avatar{

    background:linear-gradient(145deg,rgba(255,255,255,.30),rgba(255,255,255,.08));

}

.user-avatar.role-avatar::before{

    content:"";

    position:absolute;

    inset:-44%;

    z-index:0;

    background:conic-gradient(from 0deg,transparent 0 64%,rgba(255,255,255,.56) 74%,transparent 84%);

    animation:avatarHalo 3.4s linear infinite;

}

.avatar-icon{

    position:relative;

    z-index:1;

    font-size:42px;

    line-height:1;

    color:#FFFFFF;

    text-shadow:0 3px 10px rgba(0,0,0,.20);

}

.avatar-rider .avatar-icon{

    animation:avatarRide 1.8s ease-in-out infinite;

}

.avatar-manager .avatar-icon{

    animation:avatarFloat 2.8s ease-in-out infinite;

}

.avatar-admin .avatar-icon{

    animation:avatarPulse 2.3s ease-in-out infinite;

}

.avatar-super-admin{

    border-color:rgba(255,220,112,.85);

    background:linear-gradient(145deg,rgba(255,208,88,.46),rgba(99,164,255,.20));

}

.avatar-super-admin .avatar-icon{

    color:#FFF2AB;

    animation:avatarCrown 2.5s ease-in-out infinite;

}

.user-avatar.has-profile-photo{

    background:#FFFFFF;

    border-color:rgba(255,255,255,.72);

}

.avatar-profile-photo{

    width:100%;

    height:100%;

    display:block;

    object-fit:cover;

}

@keyframes avatarHalo{

    to{ transform:rotate(360deg); }

}

@keyframes avatarRide{

    0%,100%{ transform:translateX(-3px) rotate(-3deg); }

    50%{ transform:translateX(3px) rotate(3deg); }

}

@keyframes avatarFloat{

    0%,100%{ transform:translateY(1px); }

    50%{ transform:translateY(-5px); }

}

@keyframes avatarPulse{

    0%,100%{ transform:scale(1); filter:drop-shadow(0 0 0 rgba(255,255,255,0)); }

    50%{ transform:scale(1.10); filter:drop-shadow(0 0 8px rgba(255,255,255,.58)); }

}

@keyframes avatarCrown{

    0%,100%{ transform:translateY(1px) rotate(-2deg); }

    50%{ transform:translateY(-5px) rotate(2deg); }

}

@media (prefers-reduced-motion:reduce){

    .user-avatar.role-avatar::before,
    .avatar-icon{

        animation:none;

    }

}

.user-details{

    text-align:center;

    width:100%;

}

.user-name{

    font-size:18px;

    font-weight:700;

    color:#FFFFFF;

    line-height:1.4;

    word-break:break-word;

}

.user-role{

    margin-top:8px;

    display:inline-block;

    padding:6px 14px;

    border-radius:30px;

    background:rgba(255,255,255,.14);

    color:#FFFFFF;

    font-size:12px;

    font-weight:600;

    letter-spacing:.4px;

    text-transform:uppercase;

}
/* ==========================================================
   MENU
========================================================== */

.sidebar-menu{

    flex:1;

    padding:18px 14px;

    overflow-y:auto;

}

.sidebar-menu button{

    width:100%;

    display:flex;

    align-items:center;

    gap:14px;

    padding:14px 18px;

    margin-bottom:8px;

    border:none;

    border-radius:12px;

    background:transparent;

    color:#FFFFFF;

    cursor:pointer;

    font-size:15px;

    font-weight:500;

    text-align:left;

    transition:all .25s ease;

}

.sidebar-menu button .material-symbols-rounded{

    font-size:22px;

    flex-shrink:0;

}

.sidebar-menu button:hover{

    background:rgba(255,255,255,.12);

    transform:translateX(4px);

}

.sidebar-menu button.active{

    background:#FFFFFF;

    color:#0B5ED7;

    font-weight:600;

    box-shadow:0 8px 20px rgba(0,0,0,.15);

}

.sidebar-menu button.active .material-symbols-rounded{

    color:#0B5ED7;

}

/* ==========================================================
   FOOTER
========================================================== */

.sidebar-footer{

    padding:18px;

    border-top:1px solid rgba(255,255,255,.12);

}

.sidebar-version{

    text-align:center;

    color:rgba(255,255,255,.80);

    font-size:12px;

    margin-bottom:14px;

}

.sidebar-footer button{

    width:100%;

    display:flex;

    align-items:center;

    justify-content:center;

    gap:10px;

    padding:13px;

    border:none;

    border-radius:12px;

    background:rgba(255,255,255,.14);

    color:#FFFFFF;

    font-size:15px;

    font-weight:600;

    cursor:pointer;

    transition:.25s ease;

}

.sidebar-footer button:hover{

    background:#FFFFFF;

    color:#D32F2F;

}

.sidebar-footer button:hover .material-symbols-rounded{

    color:#D32F2F;

}

/* ==========================================================
   SCROLLBAR
========================================================== */

.sidebar-menu::-webkit-scrollbar{

    width:6px;

}

.sidebar-menu::-webkit-scrollbar-thumb{

    background:rgba(255,255,255,.25);

    border-radius:20px;

}

/* ==========================================================
   RESPONSIVE
========================================================== */

@media (max-width:992px){

    .sidebar{

        width:250px;

        min-width:250px;

    }

}

@media (max-width:768px){

    .sidebar{

        position:fixed;

        z-index:1000;

        left:-100%;

        transition:left .30s ease;

    }

    .sidebar.open{

        left:0;

    }

}
/* ==========================================================
   LOGIN PAGE
========================================================== */

.login-container{

    display:flex;

    min-height:100vh;

    width:100%;

    background:linear-gradient(
    135deg,
    #0B5CAD 0%,
    #1976D2 45%,
    #42A5F5 100%
);

}

/* ===========================
   LEFT
=========================== */

.login-left{

    flex:1;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:60px;

    color:#fff;

}

.login-brand{

    text-align:center;

    max-width:420px;

}

.login-brand{

    transform:translateY(-40px);

}
.login-left{

    position:relative;

    overflow:hidden;

}

.login-left::before{

    content:"";

    position:absolute;

    inset:0;

    background:

        radial-gradient(circle at top left,
        rgba(255,255,255,.10),
        transparent 45%);

    pointer-events:none;

}

.login-brand img{

    width:260px;

    margin:0 auto 25px;

    filter:
    brightness(1.15)
    contrast(1.08)
    drop-shadow(0 0 12px rgba(255,255,255,.55))
    drop-shadow(0 12px 28px rgba(0,0,0,.25));

    transition:.3s ease;

}

.login-brand img:hover{

    transform:scale(1.03);

}

.login-brand h1{

    font-size:58px;

    font-weight:700;

    margin-bottom:12px;

    letter-spacing:-1px;

}

.login-brand h2{

    font-size:36px;

    line-height:1.35;

    margin-bottom:22px;

}

.login-brand p{

    font-size:19px;

    opacity:.92;

    letter-spacing:1px;

}

/* ===========================
   RIGHT
=========================== */

.login-right{

    flex:1;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:60px;

    background:#F5F7FB;

}

/* ===========================
   CARD
=========================== */

.login-card{

    width:100%;

    max-width:550px;

    background:#fff;

    border-radius:18px;

    padding:48px;

    box-shadow:
    0 25px 60px rgba(15,108,189,.15);

}

.login-card h2{

    font-size:34px;

    margin-bottom:14px;

}

.login-card>p{

    margin-bottom:45px;

}

/* ===========================
   PASSWORD
=========================== */

.password-box{

    position:relative;

}

.password-box .form-control{

    padding-right:48px;

}

.password-toggle{

    position:absolute;

    top:50%;

    right:14px;

    transform:translateY(-50%);

    width:auto;

    height:auto;

    background:transparent;

    border:none;

    padding:0;

    display:flex;

    align-items:center;

    justify-content:center;

    color:#7B8794;

    cursor:pointer;

    transition:.25s;

}

.password-toggle:hover{

    color:var(--primary);

    transform:translateY(-50%) scale(1.08);

}

/* ===========================
   REMEMBER
=========================== */

.remember-row{

    display:flex;

    justify-content:flex-start;

    align-items:center;

    margin:20px 0;

}

.remember-label{

    display:flex;

    align-items:center;

    gap:8px;

    font-size:15px;

    font-weight:500;

}

.remember-label input{

    width:16px;

    height:16px;

}

/* ===========================
   BUTTON
=========================== */

.login-card .primary-btn{

    width:100%;

    padding:15px;

    font-size:16px;

    transition:.25s ease;

}
.login-card .primary-btn:hover{

    transform:translateY(-2px);

    box-shadow:
        0 10px 20px rgba(15,108,189,.30);

} 

/* ===========================
   ERROR
=========================== */

.login-error{

    margin-top:18px;

    padding:12px;

    background:#FEE2E2;

    color:#991B1B;

    border-radius:8px;

    text-align:center;

}

/* ===========================
   FOOTER
=========================== */

.login-footer{

    text-align:center;

    margin-top:25px;

    color:#9CA3AF;

    font-size:13px;

}

/* ===========================
   MOBILE
=========================== */

@media(max-width:992px){

    .login-container{

        flex-direction:column;

    }

    .login-left{

    flex:1;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:40px 70px;

    }

    .login-brand img{

        width:170px;

    }

    .login-brand h1{

        font-size:42px;

    }

    .login-brand h2{

        font-size:26px;

    }

    .login-right{

        padding:30px;

    }

}

@media(max-width:576px){

    .login-left{

        padding:40px 20px;

    }

    .login-right{

        padding:20px;

    }

    .login-card{

        padding:28px;

    }

    .login-brand h1{

        font-size:34px;

    }

    .login-brand h2{

        font-size:22px;

    }

}
/* ==========================================================
   DASHBOARD CARDS
========================================================== */

.dashboard-cards{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

    gap:24px;

    margin-bottom:30px;

}

.dashboard-card{

    position:relative;

    background:#ffffff;

    border:1px solid #e8edf5;

    border-radius:16px;

    padding:24px;

    overflow:hidden;

    transition:all .25s ease;

    box-shadow:0 4px 18px rgba(15,23,42,.06);

    cursor:default;

}

.dashboard-card:hover{

    transform:translateY(-4px);

    box-shadow:0 14px 35px rgba(15,23,42,.12);

}

.dashboard-card::before{

    content:"";

    position:absolute;

    top:0;

    left:0;

    width:100%;

    height:5px;

}

.dashboard-card.total::before{

    background:#2563eb;

}

.dashboard-card.pending::before{

    background:#f59e0b;

}

.dashboard-card.under-review::before{

    background:#7c3aed;

}

.dashboard-card.approved::before{

    background:#16a34a;

}

.dashboard-card.rejected::before{

    background:#dc2626;

}

.card-title{

    font-size:14px;

    font-weight:600;

    color:#64748b;

    text-transform:uppercase;

    letter-spacing:.5px;

    margin-bottom:12px;

}

.card-value{

    font-size:42px;

    font-weight:700;

    line-height:1;

    color:#0f172a;

}

.dashboard-card.total{

    background:linear-gradient(180deg,#ffffff,#f8fbff);

}

.dashboard-card.pending{

    background:linear-gradient(180deg,#ffffff,#fffaf0);

}

.dashboard-card.under-review{

    background:linear-gradient(180deg,#ffffff,#faf5ff);

}

.dashboard-card.approved{

    background:linear-gradient(180deg,#ffffff,#f5fff8);

}

.dashboard-card.rejected{

    background:linear-gradient(180deg,#ffffff,#fff6f6);

}
/* ==========================================================
   DASHBOARD GRID
========================================================== */

.dashboard-grid{

    display:grid;

    grid-template-columns:2fr 1fr;

    gap:24px;

    margin-bottom:30px;

}

@media(max-width:1100px){

    .dashboard-grid{

        grid-template-columns:1fr;

    }

}

/* ==========================================================
   DASHBOARD PANEL
========================================================== */

.dashboard-panel{

    background:#ffffff;

    border:1px solid #e8edf5;

    border-radius:16px;

    overflow:hidden;

    box-shadow:0 4px 18px rgba(15,23,42,.06);

    transition:.25s ease;

}

.dashboard-panel:hover{

    box-shadow:0 12px 32px rgba(15,23,42,.10);

}

.panel-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px 24px;

    background:#f8fafc;

    border-bottom:1px solid #edf2f7;

    font-size:16px;

    font-weight:700;

    color:#0f172a;

}

.panel-body{

    padding:18px 24px;

}
/* ==========================================================
   TABLE
========================================================== */

.table-responsive{

    width:100%;

    overflow-x:auto;

}

.table{

    width:100%;

    border-collapse:collapse;

    min-width:700px;

}

.table thead{

    background:#f8fafc;

}

.table th{

    padding:16px;

    text-align:left;

    font-size:13px;

    text-transform:uppercase;

    letter-spacing:.4px;

    color:#64748b;

    font-weight:700;

    border-bottom:2px solid #e2e8f0;

}

.table td{

    padding:16px;

    color:#334155;

    border-bottom:1px solid #edf2f7;

    vertical-align:middle;

}

.table tbody tr{

    transition:.2s ease;

}

.table tbody tr:hover{

    background:#f8fbff;

}

.table tbody tr:last-child td{

    border-bottom:none;

}

/* Fixed layout keeps all Admin Dashboard summary columns aligned, even when
   Zone, Warehouse, and LM Hub names have different lengths. */
.summary-table{

    min-width:0;

    table-layout:fixed;

}

.summary-table th:first-child,
.summary-table td:first-child{

    width:20%;

    text-align:left;

}

.summary-table th:not(:first-child),
.summary-table td:not(:first-child){

    width:20%;

    text-align:center;

}
/* ==========================================================
   STATUS BADGES
========================================================== */

.status-badge{

    display:inline-flex;

    align-items:center;

    gap:5px;

    padding:2px 0;

    color:#334155;

    font-size:14px;

    font-weight:500;

    white-space:nowrap;

}

.status-indicator{

    position:relative;

    z-index:0;

    display:inline-flex;

    align-items:center;

    justify-content:center;

    width:18px;

    height:18px;

    font-size:14px;

    line-height:1;

}

.status-indicator::before{

    content:"";

    position:absolute;

    z-index:-1;

    width:15px;

    height:15px;

    border-radius:50%;

    opacity:.64;

    filter:blur(5px);

}

.badge-primary .status-indicator::before{

    background:radial-gradient(circle,#fde68a 0%,#f59e0b 56%,transparent 76%);

}

.badge-warning .status-indicator::before{

    background:radial-gradient(circle,#bfdbfe 0%,#3b82f6 56%,transparent 76%);

}

.badge-success .status-indicator::before{

    background:radial-gradient(circle,#bbf7d0 0%,#22c55e 56%,transparent 76%);

}

.badge-danger .status-indicator::before{

    background:radial-gradient(circle,#fecaca 0%,#ef4444 56%,transparent 76%);

}

.badge-secondary .status-indicator::before{

    background:radial-gradient(circle,#e2e8f0 0%,#94a3b8 56%,transparent 76%);

}

.status-pending{

    background:#FEF3C7;

    color:#92400E;

}

.status-approved{

    background:#DCFCE7;

    color:#166534;

}

.status-rejected{

    background:#FEE2E2;

    color:#991B1B;

}

.status-review{

    background:#DBEAFE;

    color:#1D4ED8;

}



/* ==========================================================
   IMAGE PREVIEW
========================================================== */

.preview-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

    gap:24px;

}

.image-preview{

    width:100%;

    height:260px;

    object-fit:contain;

    border:1px solid var(--border);

    border-radius:12px;

    background:#F8FAFC;

}

/* New-submission attachment previews */
.file-preview{

    min-height:116px;
    border:1px dashed #C7D2E3;
    border-radius:14px;
    padding:14px;
    background:linear-gradient(145deg,#F8FBFF 0%,#F1F6FD 100%);
    color:var(--text);
    overflow:hidden;

}

.file-preview.preview-empty{

    display:flex;
    align-items:center;
    justify-content:center;
    color:#64748B;

}

.file-preview-placeholder{

    font-size:14px;

}

.file-preview.preview-ready{

    display:grid;
    gap:12px;
    border-style:solid;
    border-color:#BFDBFE;
    background:#F8FBFF;

}

.file-preview-meta{

    min-width:0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    font-size:13px;

}

.file-preview-meta strong{

    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

}

.file-preview-meta span{

    flex:0 0 auto;
    color:#64748B;
    font-size:12px;

}

.file-preview-media{

    display:grid;
    gap:10px;

}

.attachment-image-preview,
.attachment-video-preview,
.attachment-pdf-preview{

    display:block;
    width:100%;
    height:230px;
    border:1px solid #DCE5F0;
    border-radius:10px;
    background:#FFFFFF;

}

.attachment-image-preview{

    object-fit:contain;

}

.attachment-video-preview{

    object-fit:contain;
    background:#0F172A;

}

.attachment-audio-preview{

    width:100%;
    min-height:42px;

}

.attachment-pdf-preview{

    height:260px;

}

.preview-open-file{

    justify-self:start;
    border:0;
    border-radius:8px;
    padding:9px 13px;
    background:#E8F1FF;
    color:#165FC1;
    font-weight:700;
    cursor:pointer;

}

.preview-open-file:hover{

    background:#D7E8FF;

}

.file-preview.preview-error{

    display:grid;
    gap:5px;
    border-style:solid;
    border-color:#FCA5A5;
    background:#FEF2F2;
    color:#B91C1C;

}

.file-preview.preview-error span{

    color:#991B1B;
    font-size:13px;
    line-height:1.45;

}



/* ==========================================================
   DETAILS GRID
========================================================== */

.details-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

    gap:20px;

}

.details-grid label{

    display:block;

    font-size:13px;

    color:var(--text-light);

    margin-bottom:6px;

}

.details-grid p{

    font-weight:600;

    word-break:break-word;

}
/* ==========================================================
   NOTIFICATIONS
========================================================== */

.notification-list{

    display:flex;

    flex-direction:column;

    gap:18px;

}

.notification-item{

    background:#ffffff;

    border:1px solid #e8edf5;

    border-left:5px solid #2563eb;

    border-radius:14px;

    padding:18px;

    transition:.25s ease;

}

.notification-item:hover{

    transform:translateY(-2px);

    box-shadow:0 10px 25px rgba(15,23,42,.08);

}

.notification-item.unread{

    border-left-color:#f59e0b;

    background:#fffdf7;

}

.notification-title{

    font-size:15px;

    font-weight:700;

    color:#0f172a;

    margin-bottom:8px;

}

.notification-message{

    font-size:14px;

    line-height:1.6;

    color:#64748b;

}

.notification-footer{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-top:16px;

    flex-wrap:wrap;

    gap:10px;

}

.notification-time{

    font-size:12px;

    color:#94a3b8;

}
/* ==========================================================
   UTILITIES
========================================================== */

.hidden{

    display:none !important;

}

.text-center{

    text-align:center;

}

.text-right{

    text-align:right;

}

.mt-10{

    margin-top:10px;

}

.mt-20{

    margin-top:20px;

}

.mb-20{

    margin-bottom:20px;

}
/* ==========================================================
   GLOBAL LOADER
========================================================== */

.loader-overlay{

    position:fixed;

    inset:0;

    display:none;

    justify-content:center;

    align-items:center;

    z-index:9999;

    background:linear-gradient(135deg,#0B5ED7,#2F80ED);

    backdrop-filter:blur(6px);

}

.loader-overlay.active{

    display:flex;

    animation:loaderFadeIn .35s ease;

}

.loader-box{

    width:500px;

    max-width:92%;

    background:#FFF;

    border-radius:24px;

    padding:55px 45px;

    text-align:center;

    box-shadow:0 25px 70px rgba(0,0,0,.20);

}

.loader-logo{

    width:160px;

    max-width:80%;

    height:auto;

    display:block;

    margin:0 auto 26px;

}

#loaderTitle{

    margin:0;

    font-size:34px;

    font-weight:700;

    color:#1F2937;

    line-height:1.2;

}

#loaderMessage{

    margin:18px 0 32px;

    font-size:18px;

    color:#6B7280;

    line-height:1.5;

}

.loader-dots{

    display:flex;

    justify-content:center;

    gap:10px;

    margin-bottom:28px;

}

.loader-dots span{

    width:14px;

    height:14px;

    border-radius:50%;

    background:#0B5ED7;

    animation:loaderDots 1.2s infinite ease-in-out;

}

.loader-dots span:nth-child(2){

    animation-delay:.2s;

}

.loader-dots span:nth-child(3){

    animation-delay:.4s;

}

.loader-dots span:nth-child(4){

    animation-delay:.6s;

}

.loader-footer{

    font-size:13px;

    color:#9CA3AF;

    border-top:1px solid #E5E7EB;

    padding-top:16px;

}

@keyframes loaderDots{

    0%,80%,100%{

        transform:scale(.55);

        opacity:.4;

    }

    40%{

        transform:scale(1);

        opacity:1;

    }

}

@keyframes loaderFadeIn{

    from{

        opacity:0;

    }

    to{

        opacity:1;

    }

}
/* ==========================================================
   TOAST
========================================================== */

.toast-container{

    position:fixed;

    top:20px;

    right:20px;

    z-index:99999;

    display:flex;

    flex-direction:column;

    gap:12px;

}

.toast{

    min-width:320px;

    max-width:420px;

    padding:15px 18px;

    border-radius:10px;

    color:#fff;

    box-shadow:var(--shadow);

    animation:slideToast .30s ease;

    display:flex;

    align-items:center;

    justify-content:space-between;

    gap:15px;

}

.toast-success{

    background:var(--success);

}

.toast-error{

    background:var(--danger);

}

.toast-warning{

    background:var(--warning);

    color:#111827;

}

.toast-info{

    background:var(--info);

}

.toast button{

    background:none;

    color:inherit;

    font-size:18px;

}



/* ==========================================================
   MODAL
========================================================== */

.modal{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.45);

    display:none;

    align-items:center;

    justify-content:center;

    z-index:9998;

    padding:25px;

}

.modal.active{

    display:flex;

}

.modal-content{

    width:100%;

    max-width:700px;

    background:#fff;

    border-radius:14px;

    box-shadow:var(--shadow);

    overflow:hidden;

    animation:fadeIn .25s ease;

}

.modal-header{

    padding:18px 22px;

    border-bottom:1px solid var(--border);

    display:flex;

    justify-content:space-between;

    align-items:center;

    font-weight:600;

}

.modal-body{

    padding:22px;

}

.modal-footer{

    padding:18px 22px;

    border-top:1px solid var(--border);

    display:flex;

    justify-content:flex-end;

    gap:12px;

}

.confirmation-modal .modal-content{

    max-width:520px;

}

.confirmation-modal .modal-header{

    color:var(--text);
    font-size:18px;

}

.confirmation-message{

    margin:0;
    color:var(--text-light);
    line-height:1.55;

}

.confirmation-location{

    margin-top:18px;
    border:1px solid var(--border);
    border-radius:10px;
    overflow:hidden;

}

.confirmation-location-row{

    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:18px;
    padding:12px 14px;
    border-bottom:1px solid var(--border);

}

.confirmation-location-row:last-child{

    border-bottom:0;

}

.confirmation-location-row span{

    color:var(--text-light);
    font-size:13px;

}

.confirmation-location-row strong{

    color:var(--text);
    text-align:right;

}

.repository-date-trigger{

    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    width:100%;
    text-align:left;
    background:#fff;
    cursor:pointer;

}

.repository-date-trigger:hover{

    border-color:var(--primary);

}

.repository-date-trigger .material-symbols-outlined{

    color:var(--primary);
    font-size:20px;

}

.repository-date-modal .modal-content{

    max-width:820px;

}

.repository-date-body{

    display:grid;
    grid-template-columns:210px minmax(0, 1fr);
    gap:24px;
    min-height:285px;

}

.repository-date-presets{

    display:flex;
    flex-direction:column;
    gap:4px;
    max-height:330px;
    overflow-y:auto;
    padding-right:10px;
    border-right:1px solid var(--border);

}

.repository-date-preset{

    border:1px solid transparent;
    border-radius:8px;
    background:transparent;
    color:var(--text-light);
    cursor:pointer;
    font:inherit;
    padding:10px 12px;
    text-align:left;

}

.repository-date-preset:hover,
.repository-date-preset.active{

    background:#EAF3FF;
    border-color:#B8D8FF;
    color:var(--primary-dark);

}

.repository-date-inputs{

    display:grid;
    grid-template-columns:minmax(0, 1fr) 26px minmax(0, 1fr);
    align-content:start;
    column-gap:12px;

}

.repository-date-arrow{

    align-self:center;
    color:var(--text-light);
    font-size:22px;
    padding-top:20px;
    text-align:center;

}

.repository-date-hint{

    grid-column:1 / -1;
    color:var(--text-light);
    font-size:13px;
    line-height:1.5;
    margin:20px 0 0;

}

@media (max-width:700px){

    .repository-date-body{
        grid-template-columns:1fr;
    }

    .repository-date-presets{
        border-right:0;
        border-bottom:1px solid var(--border);
        display:grid;
        grid-template-columns:repeat(2, minmax(0, 1fr));
        max-height:220px;
        padding:0 0 12px;
    }

    .repository-date-inputs{
        grid-template-columns:1fr;
        row-gap:8px;
    }

    .repository-date-arrow{
        display:none;
    }

}



/* ==========================================================
   PAGINATION
========================================================== */

.pagination{

    display:flex;

    justify-content:center;

    align-items:center;

    gap:10px;

    margin-top:20px;

    flex-wrap:wrap;

}

.pagination button{

    min-width:40px;

    height:40px;

    border-radius:8px;

    background:#fff;

    border:1px solid var(--border);

    font-weight:600;

}

.pagination button:hover{

    background:#F3F4F6;

}

.pagination button.active{

    background:var(--primary);

    color:#fff;

    border-color:var(--primary);

}



/* ==========================================================
   SEARCH BOX
========================================================== */

.search-box{

    position:relative;

}

.search-box input{

    padding-left:40px;

}

.search-box i{

    position:absolute;

    left:14px;

    top:50%;

    transform:translateY(-50%);

    color:#9CA3AF;

}



/* ==========================================================
   EMPTY STATE
========================================================== */

.empty-state{

    text-align:center;

    padding:60px 20px;

    color:var(--text-light);

}

.empty-state h3{

    margin-bottom:10px;

    color:var(--text);

}



/* ==========================================================
   SCROLLBAR
========================================================== */

::-webkit-scrollbar{

    width:10px;

    height:10px;

}

::-webkit-scrollbar-track{

    background:#F3F4F6;

}

::-webkit-scrollbar-thumb{

    background:#C7CDD6;

    border-radius:50px;

}

::-webkit-scrollbar-thumb:hover{

    background:#AEB7C3;

}



/* ==========================================================
   RESPONSIVE
========================================================== */

@media(max-width:768px){

    .page-header{

        flex-direction:column;

        align-items:flex-start;

    }

    .dashboard-cards{

        grid-template-columns:1fr;

    }

    .preview-grid{

        grid-template-columns:1fr;

    }

    .details-grid{

        grid-template-columns:1fr;

    }

    .form-grid{

        grid-template-columns:1fr;

    }

    .button-row{

        flex-direction:column;

    }

    .button-row button{

        width:100%;

    }

    .toast{

        min-width:100%;

    }

}



@media(max-width:576px){

    .content{

        padding:12px;

    }

    .card-body{

        padding:16px;

    }

    .card-header{

        padding:16px;

    }

    .page-header h1{

        font-size:22px;

    }

}

/* ==========================================================
   ANIMATIONS
========================================================== */

@keyframes spin{

    from{

        transform:rotate(0deg);

    }

    to{

        transform:rotate(360deg);

    }

}



@keyframes fadeIn{

    from{

        opacity:0;

        transform:translateY(10px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* Smooth, lightweight transition for normal sidebar navigation. */
.page.page-enter{

    animation:pageEnter .28s cubic-bezier(.2,.75,.25,1) both;

}

/* Used when a reviewer opens an RTO or CSR ticket. */
.page.page-pull-up{

    animation:pagePullUp .34s cubic-bezier(.16,1,.3,1) both;

}

@keyframes pageEnter{

    from{

        opacity:0;
        transform:translateY(8px);

    }

    to{

        opacity:1;
        transform:translateY(0);

    }

}

@keyframes pagePullUp{

    from{

        opacity:0;
        transform:translateY(28px) scale(.985);

    }

    to{

        opacity:1;
        transform:translateY(0) scale(1);

    }

}

@media (prefers-reduced-motion: reduce){

    .page.page-enter,
    .page.page-pull-up{

        animation:none;

    }

}



@keyframes slideToast{

    from{

        opacity:0;

        transform:translateX(40px);

    }

    to{

        opacity:1;

        transform:translateX(0);

    }

}



/* ==========================================================
   ROLE VISIBILITY
   These are JavaScript role markers. Visibility is controlled
   exclusively by the shared .hidden utility class.
========================================================== */



/* ==========================================================
   DISABLED
========================================================== */

button:disabled{

    opacity:.6;

    cursor:not-allowed;

}



/* ==========================================================
   FILE INPUT
========================================================== */

input[type=file]{

    padding:10px;

}



/* ==========================================================
   READ ONLY INPUT
========================================================== */

input[readonly]{

    background:#F9FAFB;

}



/* ==========================================================
   MOBILE MENU BUTTON
========================================================== */

.mobile-menu-btn{
    display:none;
    position:fixed;
    top:14px;
    left:14px;
    z-index:1100;
    width:44px;
    height:44px;
    border-radius:10px;
    background:var(--primary);
    color:#fff;
    font-size:22px;
    align-items:center;
    justify-content:center;
    box-shadow:0 4px 12px rgba(0,0,0,.2);
}

@media(max-width:768px){
    .mobile-menu-btn{
        display:flex;
    }
    .content-wrapper{
        padding-top:60px;
    }
}

/* ==========================================================
   CANONICAL APPLICATION SHELL
   Keep this final block as the only source of app-shell layout.
========================================================== */

#appContainer {
    display:flex;
    width:100%;
    min-height:100vh;
    min-height:100dvh;
    background:var(--background);
}

#appContainer .sidebar {
    position:sticky;
    top:0;
    left:auto;
    flex:0 0 280px;
    width:280px;
    min-width:280px;
    height:100vh;
    height:100dvh;
    align-self:flex-start;
}

/* Desktop browser zoom can make dynamic viewport units recalculate repeatedly.
   Keep the application shell tied to a stable viewport height and reserve the
   scrollbar so the page does not jump while Chrome changes zoom. */
@media (min-width:769px) {
    html {
        scroll-behavior:auto;
        scrollbar-gutter:stable;
        overflow-y:scroll;
    }

    body {
        min-height:0;
        overflow-y:scroll;
    }

    #appContainer {
        min-height:0;
        align-items:stretch;
    }

    #appContainer .sidebar {
        position:static;
        top:auto;
        height:auto;
        min-height:100vh;
        align-self:stretch;
    }

    #appContainer .content-wrapper {
        min-height:100vh;
    }
}

#appContainer .content-wrapper {
    flex:1 1 auto;
    display:block;
    width:auto;
    min-width:0;
    padding:0;
}

#appContainer #mainContent {
    width:100%;
    min-width:0;
    min-height:100%;
    padding:24px;
    overflow:visible;
    background:var(--background);
}

#appContainer .main-content,
#appContainer .page,
#appContainer .page-container,
#appContainer .dashboard-container,
#appContainer .submission-container,
#appContainer .table-responsive {
    width:100%;
    max-width:100%;
    min-width:0;
}

#appContainer .sidebar-menu span {
    display:inline;
}

#appContainer .sidebar-footer #appVersion {
    margin-bottom:14px;
    text-align:center;
    color:rgba(255,255,255,.8);
    font-size:12px;
}

a.primary-btn,
a.secondary-btn {
    display:inline-flex;
    align-items:center;
    justify-content:center;
}

@media(max-width:992px) {
    #appContainer .sidebar {
        flex-basis:250px;
        width:250px;
        min-width:250px;
    }
}

@media(max-width:768px) {
    #appContainer {
        display:block;
    }

    #appContainer .sidebar {
        position:fixed;
        inset:0 auto 0 0;
        width:min(280px, calc(100vw - 48px));
        min-width:0;
        height:100vh;
        height:100dvh;
        z-index:1000;
        visibility:hidden;
        transform:translateX(-100%);
        transition:transform .25s ease, visibility .25s ease;
    }

    #appContainer .sidebar.open {
        visibility:visible;
        transform:translateX(0);
    }

    #appContainer #mainContent {
        padding:70px 16px 16px;
    }
}

/* ==========================================================
   MOBILE TOUCH AND FORM STABILITY
   Do not scale the document on phones. A CSS transform on body,
   appContainer or contentWrapper makes native select touch targets drift
   away from their visible position on Android and iOS.
========================================================== */

html,
body {
    width:100%;
    max-width:100%;
    -webkit-text-size-adjust:100%;
    text-size-adjust:100%;
    overscroll-behavior-x:none;
}

@media(max-width:768px) {
    #appContainer,
    #appContainer .content-wrapper,
    #appContainer #mainContent {
        transform:none !important;
        width:100%;
        max-width:100%;
    }

    #appContainer .content-wrapper {
        min-height:100vh;
        min-height:100dvh;
        overflow:visible;
    }

    #appContainer #mainContent {
        min-width:0;
        padding:66px 12px calc(16px + env(safe-area-inset-bottom));
        overflow-x:clip;
    }

    #appContainer .page,
    #appContainer .page-container,
    #appContainer .submission-container,
    #appContainer .card,
    #appContainer .card-body,
    #appContainer .form-grid,
    #appContainer .form-group {
        min-width:0;
    }

    #appContainer .form-grid {
        grid-template-columns:minmax(0,1fr);
        gap:14px;
    }

    #appContainer input.form-control,
    #appContainer textarea.form-control,
    #appContainer button {
        font-size:16px;
        touch-action:manipulation;
    }

    #appContainer input.form-control,
    #appContainer select.form-control {
        min-height:46px;
    }

    #appContainer select.form-control {
        font-size:16px;
        touch-action:auto;
        cursor:pointer;
    }

    #appContainer select.form-control {
        -webkit-appearance:menulist;
        appearance:menulist;
    }

    /* Let the platform render a native dropdown above the form card. */
    #appContainer .submission-container,
    #appContainer .submission-container .card,
    #appContainer .submission-container .card-body {
        overflow:visible;
    }
}

/* ==========================================================
   SEARCHABLE REASON PICKER
   Uses standard input and button controls; no browser select popup is used.
========================================================== */

.reason-search-group {
    position:relative;
}

.reason-source-select {
    position:absolute !important;
    width:1px !important;
    height:1px !important;
    min-width:1px !important;
    min-height:1px !important;
    margin:-1px !important;
    padding:0 !important;
    border:0 !important;
    overflow:hidden !important;
    clip:rect(0 0 0 0) !important;
    clip-path:inset(50%) !important;
    white-space:nowrap !important;
    opacity:0 !important;
    pointer-events:none !important;
}

.reason-search-input {
    width:100%;
    background:#fff;
}

.reason-search-list {
    width:100%;
    max-height:280px;
    margin-top:8px;
    overflow-y:auto;
    overscroll-behavior:contain;
    border:1px solid #D8E1EE;
    border-radius:10px;
    background:#fff;
    box-shadow:0 12px 28px rgba(15,23,42,.14);
}

.reason-search-option {
    width:100%;
    min-height:44px;
    display:block;
    padding:12px 14px;
    border:0;
    border-bottom:1px solid #EEF2F7;
    background:#fff;
    color:var(--text);
    font:inherit;
    font-size:14px;
    line-height:1.4;
    text-align:left;
    cursor:pointer;
    touch-action:manipulation;
}

.reason-search-option:last-child {
    border-bottom:0;
}

.reason-search-option:hover,
.reason-search-option:focus-visible {
    background:#EFF6FF;
    color:var(--primary);
    outline:0;
}

.reason-search-empty {
    margin:0;
    padding:13px 14px;
    color:#6B7280;
    font-size:14px;
}

@media (hover:none) and (pointer:coarse) {
    .reason-search-input {
        min-height:48px;
        font-size:16px;
    }

    .reason-search-option {
        min-height:48px;
        padding:13px 14px;
        font-size:16px;
    }
}

/* ==========================================================
   CSR / NDR CALLING MODULE
========================================================== */

.csr-page-container {
    max-width: 1600px;
}

/* Shared metric cards.  The same grid keeps every metric aligned on both
   CSR dashboards and leaves the established RTO dashboard untouched. */
.stats-grid {
    display: grid;
    gap: 18px;
}

.stat-card {
    min-width: 0;
    min-height: 118px;
    padding: 22px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #E5EAF2;
    border-top: 4px solid #2563EB;
    border-radius: 16px;
    background: linear-gradient(135deg, #F8FBFF 0%, #FFFFFF 100%);
    box-shadow: 0 8px 24px rgba(15, 23, 42, .06);
}

.stat-card span {
    color: #64748B;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .06em;
    text-transform: uppercase;
}

.stat-card strong {
    color: #0F172A;
    font-size: clamp(28px, 3vw, 38px);
    line-height: 1;
}

.stat-card-blue {
    border-top-color: #2563EB;
    background: linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%);
}

.stat-card-orange {
    border-top-color: #F59E0B;
    background: linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 100%);
}

.stat-card-green {
    border-top-color: #16A34A;
    background: linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%);
}

.csr-metric-grid {
    grid-template-columns: repeat(6, minmax(150px, 1fr));
    margin-bottom: 20px;
}

.csr-metric-grid .stat-card {
    min-height: 118px;
}

.stat-card-purple {
    border-top: 4px solid #7C3AED;
    background: linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%);
}

.stat-card-slate {
    border-top: 4px solid #475569;
    background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);
}

.csr-filter-grid {
    grid-template-columns: repeat(5, minmax(150px, 1fr));
}

.csr-assignment-grid {
    grid-template-columns: 1fr 2fr auto;
    align-items: end;
}

.csr-action-group .primary-btn {
    min-height: 46px;
    width: 100%;
}

.form-hint,
.muted {
    color: #64748B;
    font-size: 13px;
    margin: 10px 0 0;
}

.center {
    text-align: center !important;
}

.csr-detail-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(160px, 1fr));
    gap: 18px 26px;
}

.csr-detail-item {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 6px;
}

.csr-detail-item span {
    color: #64748B;
    font-size: 12px;
}

.csr-detail-item strong {
    color: #172033;
    font-size: 14px;
    line-height: 1.45;
    overflow-wrap: anywhere;
}

.csr-call-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(240px, 1fr));
    gap: 16px;
}

.csr-call-card {
    min-width: 0;
    padding: 18px;
    border: 1px solid #DCE5F1;
    border-radius: 14px;
    background: #F8FAFC;
}

.csr-call-card h3 {
    margin: 0 0 12px;
    color: #1E293B;
    font-size: 16px;
}

.csr-call-card p {
    margin: 8px 0;
    color: #475569;
    font-size: 13px;
    line-height: 1.5;
}

.csr-call-action {
    border-color: #93C5FD;
    background: linear-gradient(145deg, #EFF6FF, #FFFFFF);
}

.csr-call-action label {
    display: block;
    margin: 14px 0 6px;
    color: #334155;
    font-size: 13px;
    font-weight: 700;
}

.csr-call-action .primary-btn {
    width: 100%;
    margin-top: 14px;
}

.csr-call-summary {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 14px;
    padding: 12px;
    border-radius: 9px;
    background: #ECFDF5;
    color: #166534;
    font-size: 13px;
}

.csr-call-summary span {
    color: #4B6B5B;
    font-size: 12px;
}

.avatar-calling-agent {
    background: radial-gradient(circle at 35% 30%, #C4B5FD, #6D28D9 72%);
    box-shadow: 0 6px 18px rgba(109, 40, 217, .30);
}

@media (max-width: 1180px) {
    .csr-metric-grid,
    .csr-filter-grid { grid-template-columns: repeat(3, minmax(150px, 1fr)); }
    .csr-detail-grid { grid-template-columns: repeat(3, minmax(150px, 1fr)); }
}

@media (max-width: 760px) {
    .csr-metric-grid,
    .csr-filter-grid,
    .csr-assignment-grid,
    .csr-detail-grid,
    .csr-call-grid { grid-template-columns: 1fr; }

    .csr-call-card { padding: 16px; }
}

/* ==========================================================
   POLISH, ACCESSIBILITY AND PERSONAL APPEARANCE
========================================================== */

/* The HTML hidden attribute is the final authority for role-based controls.
   This also prevents a legacy .menu-item display rule from exposing an item. */
[hidden] {
    display: none !important;
}

.empty-notification {
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 28px;
    text-align: center;
}

.empty-notification .notification-empty-title {
    color: #334155;
    font-size: 16px;
    font-weight: 700;
}

.empty-notification .notification-empty-subtitle {
    color: #64748B;
    font-size: 14px;
}

.quick-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding: 18px 24px;
}

.quick-actions .primary-btn,
.quick-actions .secondary-btn {
    min-height: 42px;
    margin: 0;
}

#bulkUploadSection {
    margin-top: 30px;
}

.view-submission-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    min-width: 42px;
    height: 38px;
    padding: 0;
}

.view-submission-btn .material-symbols-outlined {
    font-size: 20px;
}

.view-submission-btn:hover,
.view-submission-btn:focus-visible {
    color: #FFFFFF;
    background: var(--primary);
    box-shadow: 0 0 0 4px rgba(15, 108, 189, .16), 0 7px 18px rgba(15, 108, 189, .28);
    transform: translateY(-1px);
}

.page-header-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 10px;
}

.preference-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.preference-row h3 {
    margin: 0 0 5px;
    color: #1E293B;
    font-size: 15px;
}

.preference-title {
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.preference-title .material-symbols-outlined {
    color: var(--primary);
    font-size: 20px;
}

.language-preference-select {
    max-width: 280px;
}

body.ui-rtl .language-preference-row {
    flex-direction: row-reverse;
}

body.ui-rtl .sidebar-menu,
body.ui-rtl .main-content,
body.ui-rtl .login-card,
body.ui-rtl .card,
body.ui-rtl .page-header {
    direction: rtl;
    text-align: right;
}

.preference-row p {
    margin: 0;
    color: #64748B;
    font-size: 13px;
}

.switch {
    position: relative;
    display: inline-block;
    flex: 0 0 auto;
    width: 52px;
    height: 30px;
}

.switch input {
    width: 0;
    height: 0;
    opacity: 0;
}

.slider {
    position: absolute;
    inset: 0;
    border-radius: 30px;
    background: #CBD5E1;
    cursor: pointer;
    transition: .2s ease;
}

.slider::before {
    position: absolute;
    bottom: 4px;
    left: 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #FFFFFF;
    content: "";
    box-shadow: 0 1px 3px rgba(15, 23, 42, .25);
    transition: .2s ease;
}

.switch input:checked + .slider { background: var(--primary); }
.switch input:checked + .slider::before { transform: translateX(22px); }
.switch input:focus-visible + .slider { box-shadow: 0 0 0 4px rgba(15, 108, 189, .20); }

body.dark-mode {
    --background: #0F172A;
    --text: #E5EDF8;
    --text-light: #A7B4C8;
    --border: #334155;
    background: #0F172A;
    color: #E5EDF8;
}

body.dark-mode .content-wrapper,
body.dark-mode .main-content,
body.dark-mode .page-container {
    background: #0F172A;
}

body.dark-mode .card,
body.dark-mode .dashboard-panel,
body.dark-mode .modal-content,
body.dark-mode .csr-call-card {
    border-color: #334155;
    background: #162033;
    box-shadow: 0 10px 26px rgba(0, 0, 0, .20);
}

body.dark-mode .card-header,
body.dark-mode .panel-header,
body.dark-mode .table thead,
body.dark-mode .modal-header,
body.dark-mode .modal-footer {
    border-color: #334155;
    background: #1E293B;
    color: #F8FAFC;
}

body.dark-mode h1,
body.dark-mode h2,
body.dark-mode h3,
body.dark-mode .page-header h1,
body.dark-mode .card-header,
body.dark-mode .panel-header,
body.dark-mode .csr-detail-item strong,
body.dark-mode .csr-call-card h3 {
    color: #F8FAFC;
}

body.dark-mode p,
body.dark-mode .page-header p,
body.dark-mode .form-hint,
body.dark-mode .muted,
body.dark-mode .preference-row p,
body.dark-mode .csr-detail-item span,
body.dark-mode .csr-call-card p {
    color: #A7B4C8;
}

body.dark-mode .form-control,
body.dark-mode input,
body.dark-mode select,
body.dark-mode textarea {
    border-color: #475569;
    background: #0F172A;
    color: #E5EDF8;
}

body.dark-mode .table td,
body.dark-mode .table th {
    border-color: #334155;
    color: #DCE5F1;
}

body.dark-mode .table tbody tr:nth-child(even) {
    background: #172235;
}

body.dark-mode .secondary-btn {
    border-color: #475569;
    background: #263449;
    color: #E5EDF8;
}

@media (max-width: 760px) {
    .quick-actions {
        align-items: stretch;
        padding: 16px;
    }

    .quick-actions .primary-btn,
    .quick-actions .secondary-btn {
        flex: 1 1 150px;
    }

    .preference-row { align-items: flex-start; }

    .language-preference-select {
        max-width: none;
        width: 100%;
    }
}

/* Attendance dashboard and in-app approval decision */
.page-eyebrow{margin:0 0 6px;color:#64748b;font-size:11px;font-weight:800;letter-spacing:.11em}.dashboard-page-header{gap:16px}.dashboard-header-actions{display:flex;align-items:center;gap:12px}.dashboard-switcher{display:inline-flex;padding:4px;border:1px solid #dbe5f2;border-radius:12px;background:#f4f7fb;box-shadow:0 4px 12px rgba(30,68,115,.05)}.dashboard-switch{border:0;border-radius:8px;background:transparent;color:#52627a;padding:9px 13px;font-weight:700;font-size:13px;cursor:pointer;transition:.18s ease}.dashboard-switch:hover{color:#135baa;background:#e8f1ff}.dashboard-switch.active{color:#fff;background:var(--primary);box-shadow:0 4px 10px rgba(20,91,180,.25)}.attendance-dashboard-panel{overflow:hidden;border:1px solid #dde7f3}.attendance-panel-header{gap:16px}.attendance-panel-header>div{display:flex;flex-direction:column;gap:4px}.attendance-panel-header span{font-weight:400;font-size:13px;color:#718096}.attendance-open-button{min-width:150px}.attendance-metric-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;padding:22px;background:linear-gradient(180deg,#fff,#f8fbff)}.attendance-metric{position:relative;overflow:hidden;min-height:138px;padding:20px 22px;border:1px solid #e4ecf5;border-radius:16px;background:#fff;box-shadow:0 8px 22px rgba(24,59,100,.07)}.attendance-metric::before{position:absolute;top:0;right:0;left:0;height:4px;content:""}.attendance-metric span{display:block;color:#687b98;font-size:12px;font-weight:800;letter-spacing:.055em;text-transform:uppercase}.attendance-metric strong{display:block;margin:13px 0 5px;color:#14213a;font-size:38px;line-height:1}.attendance-metric small{color:#718096;font-size:12px}.pending-attendance::before{background:#f59e0b}.pending-km::before{background:#8b5cf6}.approved-attendance::before{background:#16a34a}.approved-km::before{background:#2563eb}.attendance-history-body{padding-top:0}.attendance-summary-table{margin:0}.attendance-decision-remarks{resize:vertical;min-height:92px}.form-optional{color:#718096;font-size:12px;font-weight:400}.danger-btn{border:0;border-radius:8px;background:#dc2626;color:#fff;padding:10px 16px;font-weight:700;cursor:pointer}.danger-btn:hover{background:#b91c1c}.attendance-decision-modal .modal-content{max-width:560px}.attendance-decision-modal .modal-body{padding:22px}.attendance-decision-modal .modal-footer{display:flex;justify-content:flex-end;gap:10px}.attendance-decision-modal .form-label{display:block;margin:17px 0 7px;font-weight:700;color:#334155}
body.dark-mode .dashboard-switcher{border-color:#475569;background:#172235}body.dark-mode .dashboard-switch{color:#b8c6db}body.dark-mode .attendance-metric{border-color:#334155;background:#162033}body.dark-mode .attendance-metric strong{color:#f8fafc}body.dark-mode .attendance-metric-grid{background:#162033}
@media (max-width:1000px){.attendance-metric-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.dashboard-header-actions{align-items:flex-end;flex-direction:column}.dashboard-page-header{align-items:flex-start}}
@media (max-width:600px){.attendance-metric-grid{grid-template-columns:1fr;padding:14px}.dashboard-switcher{width:100%}.dashboard-switch{flex:1;padding:9px 6px;font-size:11px}.dashboard-header-actions{width:100%}.attendance-open-button{width:100%}.attendance-panel-header{align-items:stretch;flex-direction:column}}

/* Monthly attendance calendars (rider and scoped manager view). */
.attendance-calendar-card{margin:0 20px 20px;border:1px solid #e5edf6;border-radius:16px;overflow:hidden;background:#fff}.attendance-calendar-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;border-bottom:1px solid #e9eff6}.attendance-calendar-header>div:first-child{display:flex;flex-direction:column;gap:4px}.attendance-calendar-header span{color:#718096;font-size:13px}.attendance-calendar-controls{display:flex;align-items:center;gap:10px;white-space:nowrap}.calendar-nav{min-width:36px;padding:5px 11px;font-size:21px;line-height:1}.attendance-calendar-scroll{overflow:auto;padding:12px 20px;background:#fbfdff}.attendance-calendar-table{width:max-content;min-width:100%;border-collapse:separate;border-spacing:0 5px}.attendance-calendar-table th,.attendance-calendar-table td{min-width:41px;padding:5px 2px;text-align:center;border:0}.attendance-calendar-table thead th{color:#718096;font-size:10px;font-weight:700}.attendance-calendar-table thead th span,.attendance-calendar-table thead th strong{display:block;line-height:1.2}.attendance-calendar-table thead th strong{margin-top:2px;color:#334155;font-size:12px}.attendance-calendar-rider-head,.attendance-calendar-rider{position:sticky;left:0;z-index:2;min-width:172px!important;padding:8px 12px!important;text-align:left!important;background:#fbfdff}.attendance-calendar-rider{border-radius:9px 0 0 9px}.attendance-calendar-rider strong,.attendance-calendar-rider small{display:block}.attendance-calendar-rider strong{overflow:hidden;max-width:180px;color:#26364e;font-size:13px;text-overflow:ellipsis;white-space:nowrap}.attendance-calendar-rider small{margin-top:2px;color:#718096;font-size:11px;font-weight:400}.attendance-calendar-cell{display:inline-flex;align-items:center;justify-content:center;width:29px;height:29px;border-radius:50%;color:#fff;font-size:12px;font-weight:800}.attendance-calendar-cell.empty{border:1px solid #e0e8f1;background:#f7f9fc;color:transparent}.attendance-calendar-cell.present{background:#16a34a;box-shadow:0 3px 8px rgba(22,163,74,.22)}.attendance-calendar-cell.pending{background:#f59e0b;box-shadow:0 3px 8px rgba(245,158,11,.22)}.attendance-calendar-cell.rejected{background:#dc2626;box-shadow:0 3px 8px rgba(220,38,38,.20)}.attendance-calendar-loading{padding:28px;color:#718096;text-align:center}.attendance-calendar-legend{display:flex;flex-wrap:wrap;gap:14px 22px;padding:13px 20px 18px;color:#62748f;font-size:12px}.attendance-calendar-legend span{display:flex;align-items:center;gap:7px}.calendar-key{width:10px;height:10px;border-radius:50%;background:#e8eef5}.calendar-key.present{background:#16a34a}.calendar-key.pending{background:#f59e0b}.calendar-key.rejected{background:#dc2626}.team-attendance-dashboard{margin-bottom:22px;overflow:hidden}.team-attendance-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid #e8eef6;border-bottom:1px solid #e8eef6;background:#fbfdff}.team-attendance-metrics>div{padding:16px 22px;border-right:1px solid #e8eef6}.team-attendance-metrics>div:last-child{border-right:0}.team-attendance-metrics span,.team-attendance-metrics strong{display:block}.team-attendance-metrics span{color:#718096;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}.team-attendance-metrics strong{margin-top:5px;color:#17263c;font-size:27px}.team-attendance-dashboard .attendance-calendar-scroll{padding:14px 22px}.menu-tag{margin-left:auto;padding:2px 6px;border-radius:999px;background:rgba(255,255,255,.18);color:#fff;font-size:10px;font-weight:800}.menu-item.active .menu-tag{background:#dcecff;color:#0b5eb8}body.dark-mode .attendance-calendar-card{border-color:#334155;background:#162033}body.dark-mode .attendance-calendar-header,body.dark-mode .attendance-calendar-rider,body.dark-mode .attendance-calendar-rider-head,body.dark-mode .attendance-calendar-scroll{border-color:#334155;background:#162033}body.dark-mode .attendance-calendar-rider strong,body.dark-mode .attendance-calendar-table thead th strong,body.dark-mode .team-attendance-metrics strong{color:#eaf1fb}body.dark-mode .team-attendance-metrics{border-color:#334155;background:#162033}body.dark-mode .team-attendance-metrics>div{border-color:#334155}@media(max-width:760px){.attendance-calendar-header,.regularization-table-head{align-items:flex-start;flex-direction:column}.team-attendance-metrics{grid-template-columns:repeat(2,minmax(0,1fr))}.team-attendance-metrics>div:nth-child(2){border-right:0}.team-attendance-metrics>div:nth-child(-n+2){border-bottom:1px solid #e8eef6}.attendance-calendar-card{margin:0 12px 12px}.attendance-calendar-scroll{padding:10px}.attendance-calendar-rider-head,.attendance-calendar-rider{min-width:136px!important}}
/* Professional modal used for KM correction instead of browser prompts. */
.km-edit-modal .modal-content{max-width:560px}.km-edit-modal .modal-body{padding:22px}.km-edit-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:18px}.km-edit-form label{display:flex;flex-direction:column;gap:7px;color:#334155;font-size:13px;font-weight:800}.km-edit-error{margin:14px 0 0;color:#b42318;font-size:13px;font-weight:700}.km-edit-modal .modal-footer{display:flex;justify-content:flex-end;gap:10px}@media(max-width:560px){.km-edit-form{grid-template-columns:1fr}}
.attendance-calendar-cell.absent{background:#dc2626;box-shadow:0 3px 8px rgba(220,38,38,.2)}.attendance-calendar-cell.leave{background:#7c3aed;box-shadow:0 3px 8px rgba(124,58,237,.2)}.calendar-key.absent{background:#dc2626}.calendar-key.leave{background:#7c3aed}.attendance-correction-card{margin-bottom:22px}.attendance-correction-body{padding:0 22px 22px}
/* ==========================================================
   STABLE APPLICATION VIEWPORT
   Only the page canvas scrolls. The navigation rail and its footer remain
   pinned, including when browser zoom changes the effective viewport.
========================================================== */
body.portal-session-active {
    height:100vh;
    height:100dvh;
    min-height:0;
    overflow:hidden;
}

body.portal-session-active #appContainer {
    height:100vh;
    height:100dvh;
    min-height:0;
    overflow:hidden;
}

body.portal-session-active #appContainer .sidebar {
    position:relative;
    top:auto;
    height:100%;
    min-height:0;
    align-self:stretch;
    overflow:hidden;
}

body.portal-session-active #appContainer .sidebar-menu {
    min-height:0;
    overscroll-behavior:contain;
}

body.portal-session-active #appContainer .content-wrapper {
    height:100%;
    min-height:0;
    overflow-y:auto;
    overflow-x:hidden;
    overscroll-behavior:contain;
    scrollbar-gutter:stable;
    -webkit-overflow-scrolling:touch;
}

body.portal-session-active #appContainer #mainContent {
    min-height:100%;
    overflow:visible;
}

@media(max-width:768px) {
    body.portal-session-active #appContainer .sidebar {
        position:fixed;
        inset:0 auto 0 0;
        height:100vh;
        height:100dvh;
    }

    body.portal-session-active #appContainer .content-wrapper {
        height:100vh;
        height:100dvh;
        min-height:0;
        overflow-y:auto;
        overflow-x:hidden;
    }
}

</style>
