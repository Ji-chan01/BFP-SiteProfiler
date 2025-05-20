  const edit_user_btn = document.querySelectorAll(".edit-user-btn");
  const edit_modal_user = document.getElementById("editUserModal");

  edit_user_btn.forEach((b) => {
    b.addEventListener("click", () => {
      document.getElementById('editUserModal').style.display = "flex";
    })
  })
document.getElementById('cancelModalBtn').addEventListener('click', function () {
  document.getElementById('editUserModal').style.display = "none";
});
document.getElementById('saveUserBtn').addEventListener('click', function () {
  document.getElementById('editUserModal').style.display = "none";
});

  function openReportModal(title) {
    document.getElementById('reportTitle').innerText = title;
    document.getElementById('reportModal').style.display = 'block';
  }

  function closeReportModal() {
    document.getElementById('reportModal').style.display = 'none';
  }

  function downloadReport(filename) {
    const link = document.createElement('a');
    link.href = `/path/to/reports/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function openReportModal(title) {
    document.getElementById('reportTitle').innerText = title;
    document.getElementById('reportModal').style.display = 'block';
  }

  function closeReportModal() {
    document.getElementById('reportModal').style.display = 'none';
  }

  function downloadReport(filename) {
    const link = document.createElement('a');
    link.href = `/path/to/reports/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function openComplianceModal(name, inspectionDate, status, updated) {
    document.getElementById('complianceEstablishment').innerText = name;
    document.getElementById('complianceInspectionDate').innerText = inspectionDate;
    document.getElementById('complianceStatus').innerText = status;
    document.getElementById('complianceUpdated').innerText = updated;
    document.getElementById('complianceModal').style.display = 'block';
  }

  function closeComplianceModal() {
    document.getElementById('complianceModal').style.display = 'none';
  }

  const establishments = [
    {
      id: 1,
      name: "ABC Manufacturing",
      lat: 14.5995,
      lng: 120.9842,
      status: "compliant",
      address: "123 Manila St, Manila",
    },
    {
      id: 2,
      name: "XYZ Retail",
      lat: 14.6091,
      lng: 121.0223,
      status: "non-compliant",
      address: "456 Quezon Ave, Quezon City",
    },
    {
      id: 3,
      name: "Fire Safe Inc.",
      lat: 14.5764,
      lng: 121.0851,
      status: "compliant",
      address: "789 Pasig Rd, Pasig City",
    },
  ];


    const modal = document.getElementById('assignmentModal');
    const modalEstablishment = document.getElementById('modalEstablishment');
    const sectionTitle = document.getElementById('sectionTitle');
    let currentEstablishment = '';

    function openModal(establishment) {
      currentEstablishment = establishment;
      modalEstablishment.textContent = establishment;
      modal.style.display = 'flex';
    }

    function closeModal() {
      modal.style.display = 'none';
    }

    function confirmAssignment() {
      const selectedInspector = document.getElementById('inspectorSelect').value;
      alert(`Assigned ${selectedInspector} to ${currentEstablishment}`);
      closeModal();
    }

    let mapInstance;

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');

  const titleMap = {
    dashboard: "Dashboard",
    'user-management': "User Management",
    assignment: "Inspector Assignment",
    history: "Assignment History",
    reports: "Reports",
    compliance: "Compliance Monitoring",
    map: "GIS Map"
  };
  document.getElementById('sectionTitle').innerText = titleMap[sectionId];

  if (sectionId === "map" ) {
    setTimeout(() => {
      if (!mapInstance) {
        mapInstance = L.map('gis-map').setView([13.0, 122.0], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19
        }).addTo(mapInstance);
      } else {
        mapInstance.invalidateSize();
      }
    }, 100);
  }
}


    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
  const mapSection = document.getElementById("map");
  
  let mapInitialized = false;

  window.showSection = function (sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
    document.getElementById("sectionTitle").textContent =
      sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

if (sectionId === "map" && !mapInitialized) {
      const map = L.map("gis-map").setView([13.41, 122.56], 6);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([13.41, 122.56]).addTo(map)
        .bindPopup("Sample Establishment")
        .openPopup();

      mapInitialized = true;
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("dashboard-gis-map").setView([13.41, 122.56], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  L.marker([13.41, 122.56])
    .addTo(map)
    .bindPopup("Sample Establishment")
    .openPopup();
});
