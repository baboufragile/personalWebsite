import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {
  listOfExp = ["Angular", "NodeJs", "Virtualisation", "MySQL", "Bash"]

  private experiences: any = {
    "Angular": 4,
    "NodeJs": 4,
    "Virtualisation": 4,
    "MySQL": 4,
    "Bash": 3
  };
  constructor() { }

  ngOnInit(): void {
  }
  isChecked(name: string, number: number) {
    if (this.experiences[name] >= number) {
      return true
    } else {
      return false
    }
  }
}
